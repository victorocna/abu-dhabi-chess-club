import Link from 'next/link';
import { ResetFormik } from 'echess/components/Identity';

const Reset = ({ hash }) => (
  <div className="flex flex-col w-full p-4 md:p-8 md:rounded bg-white text-sm">
    <Link href="/login">
      <a>← back to login</a>
    </Link>
    <h2 className="font-bold text-2xl mb-4">Reset password</h2>
    <ResetFormik hash={hash} />
  </div>
);

export default Reset;
