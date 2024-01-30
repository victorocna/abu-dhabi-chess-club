import { withRouter } from 'echess/components';
import { MainHeader, Footer, Reset } from '../../components';

const Page = ({ hash }) => (
  <>
    <header>
      <MainHeader />
    </header>
    <main className="cover bg-gray-200 md:bg-gray-600 flex flex-col items-center justify-center pt-4 flex-1">
      <div className="max md:my-8 md:grid gap-8 grid-cols-2">
        <Reset hash={hash} />
      </div>
    </main>
    <Footer />
  </>
);

export default withRouter(Page);
