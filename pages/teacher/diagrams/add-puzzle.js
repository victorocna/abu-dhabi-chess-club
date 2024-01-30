import { Formik } from 'formik';
import { Back, withAuth } from 'echess/components';
import { AddPuzzle } from 'echess/components/Formik';
import { puzzle } from 'echess/models';
import { create } from 'echess/controllers/diagram';
import { Layout } from '../../../components';

const Page = () => (
  <Layout role="teacher">
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/diagrams" />
        <h2 className="font-bold text-2xl">Add puzzle</h2>
      </div>
      <Formik {...puzzle} onSubmit={create}>
        {(props) => <AddPuzzle {...props} />}
      </Formik>
    </div>
  </Layout>
);

export default withAuth(Page);
