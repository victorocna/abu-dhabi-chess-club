import { MainHeader, Footer, ThankYou } from '../components';

const Page = () => (
  <>
    <header>
      <MainHeader />
    </header>
    <main className="cover bg-gray-200 md:bg-gray-600 flex flex-col items-center justify-center pt-4 flex-1">
      <div className="max md:my-8 md:grid gap-8 grid-cols-2">
        <ThankYou />
      </div>
    </main>
    <Footer />
  </>
);

export default Page;
