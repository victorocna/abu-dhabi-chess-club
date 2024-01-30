import Link from 'next/link';

const ThankYou = () => (
  <div className="flex flex-col w-full p-4 md:p-8 md:rounded bg-white text-sm">
    <Link href="/login">
      <a>← back to login</a>
    </Link>
    <h2 className="font-bold text-2xl mb-4">Thank you for signing up!</h2>
    <img
      className="w-full mb-4"
      src="https://media.giphy.com/media/dmt0NRgroyTPW/giphy.gif"
      alt="Patrick hooray"
    />
    <h3 className="text-lg font-bold mb-4">What happens next?</h3>
    <ol className="list-decimal">
      <li>You will receive an email with instructions to confirm your account</li>
    </ol>
  </div>
);

export default ThankYou;
