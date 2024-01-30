import Link from 'next/link';
import SignupForm from '../components/Forms/SignupForm';
import { logo, title } from '../site.config';

const Page = () => (
  <main className="grid sm:grid-cols-2 min-h-screen">
    <div className="hidden sm:flex relative cover bg-cover flex-col ">
      <div className="z-0 flex flex-col">
        <div className="flex gap-4 items-center p-10">
          <img className="w-16" src={logo} alt={title} />
          <h1 className="font-display text-lg md:text-2xl font-semibold text-black">{title}</h1>
        </div>
      </div>
    </div>
    <div className="relative bg-gray-200 flex flex-col gap-4 sm:gap-10 items-center justify-center w-full">
      <div className="flex w-full sm:justify-end justify-between absolute p-4 sm:p-0 top-0">
        <div className="flex sm:hidden gap-2 items-center">
          <img className="w-10" src={logo} alt={title} />
          <h1 className="font-display w-32 font-semibold">{title}</h1>
        </div>
        <Link href="/login">
          <span className="font-semibold text-sm text-black sm:m-10 rounded-md px-3 py-2 cursor-pointer no-underline hover:bg-gray-200">
            Login
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="font-bold text-3xl">Sign Up</h2>
        <p className="text-sm text-gray-600">Create your account and join us today!</p>
      </div>
      <div className="max-w-md p-4 w-full">
        <SignupForm />
      </div>
      <div className="flex flex-col text-gray-600 text-sm">
        <p>By clicking continue, you agree to our</p>
        <div className="flex gap-1">
          <Link href="/signup">
            <a className="cursor-pointer underline hover:text-black">Terms of Service</a>
          </Link>
          <span>and</span>
          <Link href="/signup">
            <a className="cursor-pointer underline hover:text-black">Privacy Policy.</a>
          </Link>
        </div>
      </div>
    </div>
  </main>
);

export default Page;
