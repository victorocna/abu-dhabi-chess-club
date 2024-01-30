import Link from 'next/link';
import { LoginForm } from '../components/Forms';
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
    <div className="relative bg-gray-200 flex flex-col gap-10 items-center justify-center w-full">
      <div className="flex w-full sm:justify-end justify-between absolute p-4 sm:p-0 top-0">
        <div className="flex sm:hidden gap-2 items-center">
          <img className="w-10" src={logo} alt={title} />
          <h1 className="font-display w-32 font-semibold">{title}</h1>
        </div>
        <Link href="/signup">
          <span className="font-semibold text-sm text-black sm:m-10 rounded-md px-3 py-2 cursor-pointer no-underline hover:bg-gray-200">
            Sign Up
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h2 className="font-bold text-3xl">Login</h2>
        <p className="text-sm text-gray-600">
          Enter your credentials below to login into your account
        </p>
      </div>
      <div className="max-w-md p-4 w-full">
        <LoginForm />
      </div>
      <div className="flex text-sm gap-1">
        <p>No account yet?</p>
        <Link href="/signup">
          <a className="text-primary cursor-pointer font-semibold">Sign up</a>
        </Link>
      </div>
    </div>
  </main>
);

export default Page;
