import { Formik } from 'formik';
import { withAuth, Back } from 'echess/components';
import { AddTeacher } from 'echess/components/Formik';
import { signup } from 'echess/models';
import { create } from 'echess/controllers/teacher';
import { Layout } from '../../../components';

const Page = () => (
  <Layout>
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/teachers" />
        <h2 className="font-bold text-2xl">Add teacher</h2>
      </div>
      <Formik {...signup} onSubmit={create}>
        {(props) => <AddTeacher {...props} />}
      </Formik>
    </div>
  </Layout>
);

export default withAuth(Page);
