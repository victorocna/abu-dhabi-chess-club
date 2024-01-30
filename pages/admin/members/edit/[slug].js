import { Formik } from 'formik';
import { withAuth, withRouter, Back, QueryStatus } from 'echess/components';
import { EditMember } from 'echess/components/Formik';
import { updateMember } from 'echess/models/member';
import { fetchMember, update } from 'echess/controllers/member';
import { Layout } from '../../../../components';

const Page = ({ id }) => {
  const { data, ...query } = fetchMember(id);
  if (!data) {
    return <QueryStatus {...query} />;
  }

  return (
    <Layout>
      <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
        <div className="flex items-center mb-4 px-4 lg:px-8">
          <Back to="/admin/members" />
          <h2 className="font-bold text-2xl">Edit member</h2>
        </div>
        <Formik initialValues={data} validationSchema={updateMember} onSubmit={update}>
          {(props) => <EditMember {...props} />}
        </Formik>
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
