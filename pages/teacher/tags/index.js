import { withAuth } from 'echess/components';
import { TagList } from 'echess/components/Admin';
import { Layout } from '../../../components';

const Page = () => (
  <Layout role="teacher">
    <div className="flex items-center mb-4">
      <h1 className="font-bold text-2xl mr-2">Tag list</h1>
    </div>
    <TagList viewOnly />
  </Layout>
);

export default withAuth(Page);
