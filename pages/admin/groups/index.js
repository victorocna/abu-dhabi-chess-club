import { Link, withAuth } from 'echess/components';
import { Groups } from 'echess/components/Lists';
import { Layout } from '../../../components';

const Page = () => (
  <Layout>
    <div className="flex items-center mb-4">
      <h1 className="font-bold text-2xl mr-2">Group list</h1>
      <Link href="/admin/groups/add">Add group</Link>
    </div>
    <Groups />
  </Layout>
);

export default withAuth(Page);
