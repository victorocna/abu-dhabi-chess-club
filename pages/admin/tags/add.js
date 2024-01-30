import { Formik } from 'formik';
import { withAuth, Back } from 'echess/components';
import { AddTag } from 'echess/components/Formik';
import { tag } from 'echess/models';
import { create } from 'echess/controllers/tag';
import { Layout } from '../../../components';

const Page = () => (
  <Layout>
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/tags" />
        <h2 className="font-bold text-2xl">Add tag</h2>
      </div>
      <Formik {...tag} onSubmit={create}>
        {(props) => <AddTag {...props} />}
      </Formik>
    </div>
  </Layout>
);

export default withAuth(Page);
