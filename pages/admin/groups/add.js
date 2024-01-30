import { Formik } from 'formik';
import { withAuth, Back } from 'echess/components';
import { AddGroup } from 'echess/components/Formik';
import { group } from 'echess/models';
import { create } from 'echess/controllers/group';
import { Layout } from '../../../components';

const Page = () => (
  <Layout>
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/groups" />
        <h2 className="font-bold text-2xl">Add group</h2>
      </div>
      <Formik {...group} onSubmit={create}>
        {(props) => <AddGroup {...props} />}
      </Formik>
    </div>
  </Layout>
);

export default withAuth(Page);
