import { Profile, withAuth } from 'echess/components';
import { ChangePasswordFormik } from 'echess/components/Identity';
import { Layout } from '../../components';

const Page = () => (
  <Layout>
    <div className="bg-white border rounded-lg shadow py-8 mb-4">
      <h1 className="font-bold text-2xl mb-4 px-4 lg:px-8">Account settings</h1>
      <Profile />
    </div>
    <div className="bg-white border rounded-lg shadow py-8 mb-4">
      <h2 className="font-bold text-2xl mb-4 px-4 lg:px-8">Change password</h2>
      <ChangePasswordFormik />
    </div>
  </Layout>
);

export default withAuth(Page);
