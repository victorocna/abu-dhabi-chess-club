import Link from 'next/link';
import { SignupFormik } from 'echess/components/Identity';
import { A } from 'echess/components';

const Signup = () => (
  <div className="flex flex-col w-full p-4 md:p-8 md:rounded bg-white text-sm">
    <Link href="/login">
      <a>← back to login</a>
    </Link>
    <h2 className="font-bold text-2xl mb-4">Signup</h2>
    <SignupFormik />
    <div className="mt-4">
      <span>By signing up, you accept the</span>
      <A className="mx-1 font-semibold" href="#">
        terms of service
      </A>
      <span>and</span>
      <A className="mx-1 font-semibold" href="#">
        privacy policy
      </A>
    </div>
  </div>
);

export default Signup;
