import { Link, withAuth } from 'echess/components';
import { Teachers } from 'echess/components/Lists';
import { Layout } from '../../../components';

const Page = () => (
  <Layout>
    <div className="flex items-center mb-4">
      <h1 className="font-bold text-2xl mr-2">Teacher list</h1>
      <Link href="/admin/teachers/add">Add teacher</Link>
    </div>
    <Teachers />
  </Layout>
);

export default withAuth(Page);
