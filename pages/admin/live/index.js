import { withAuth } from 'echess/components';
import { LiveLessons } from 'echess/components/Lists';
import { Layout } from '../../../components';

const Page = () => (
  <Layout>
    <div className="flex items-center mb-4">
      <h1 className="font-bold text-2xl mr-2">Live Lessons</h1>
    </div>
    <LiveLessons />
  </Layout>
);

export default withAuth(Page);
