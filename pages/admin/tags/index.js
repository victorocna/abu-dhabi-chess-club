import { Link, withAuth } from 'echess/components';
import { TagList } from 'echess/components/Admin';
import { Layout } from '../../../components';

const Page = () => (
  <Layout>
    <div className="flex items-center mb-4">
      <h1 className="font-bold text-2xl mr-2">Tag list</h1>
      <Link href="/admin/tags/add">Add tags</Link>
    </div>
    <TagList />
  </Layout>
);

export default withAuth(Page);
