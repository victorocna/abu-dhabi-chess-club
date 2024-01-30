import Link from 'next/link';
import { ForgotFormik } from 'echess/components/Identity';

const Forgot = () => (
  <div className="flex flex-col w-full p-4 md:p-8 md:rounded bg-white text-sm">
    <Link href="/login">
      <a>← back to login</a>
    </Link>
    <h2 className="font-bold text-2xl mb-4">Recover your password</h2>
    <ForgotFormik />
  </div>
);

export default Forgot;
