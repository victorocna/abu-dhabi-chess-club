import { Formik } from 'formik';
import { withAuth, withRouter, Back, QueryStatus } from 'echess/components';
import { EditTeacher } from 'echess/components/Formik';
import { updateTeacher } from 'echess/models/teacher';
import { fetchTeacher, update } from 'echess/controllers/teacher';
import { Layout } from '../../../../components';

const Page = ({ id }) => {
  const { data, ...query } = fetchTeacher(id);
  if (!data) {
    return <QueryStatus {...query} />;
  }

  return (
    <Layout>
      <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
        <div className="flex items-center mb-4 px-4 lg:px-8">
          <Back to="/admin/teachers" />
          <h2 className="font-bold text-2xl">Edit teacher</h2>
        </div>
        <Formik initialValues={data} validationSchema={updateTeacher} onSubmit={update}>
          {(props) => <EditTeacher {...props} />}
        </Formik>
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
