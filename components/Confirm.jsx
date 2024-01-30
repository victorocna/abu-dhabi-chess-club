import Link from 'next/link';
import { ConfirmAccount } from 'echess/components/Identity';
import { title } from '../site.config';

const Confirm = ({ hash }) => (
  <div className="flex flex-col w-full p-4 md:p-8 md:rounded bg-white text-sm">
    <Link href="/login">
      <a>← back to login</a>
    </Link>
    <h2 className="font-bold text-2xl mb-4">Confirm account</h2>
    <ConfirmAccount
      hash={hash}
      error={
        <p className="text-red-600 animated fadeIn">
          Error! Your account was not confirmed. To confirm your account please contact us.
        </p>
      }
      success={
        <p className="text-green-700 animated fadeIn">
          Success! Your account on the <strong>{title}</strong> platform was confirmed.
        </p>
      }
    />
  </div>
);

export default Confirm;
