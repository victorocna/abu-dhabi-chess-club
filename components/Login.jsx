import Link from 'next/link';
import { LoginFormik } from 'echess/components/Identity';

const Login = () => (
  <div className="flex flex-col justify-center w-full p-4 md:p-8 md:rounded bg-white text-sm">
    <h2 className="font-bold text-xl text-bluemarin mb-4">Login</h2>
    <LoginFormik />
    <div className="mt-2">
      <Link href="/forgot">
        <a className="text-gray-600">Forgot your password?</a>
      </Link>
    </div>
    <div className="my-2">
      <Link href="/signup">
        <a className="text-gray-600">
          <span className="mr-1">No account yet?</span>
          <span className="text-purple-800 font-bold">Signup today</span>
        </a>
      </Link>
    </div>
  </div>
);

export default Login;
