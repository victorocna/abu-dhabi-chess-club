import { Formik } from 'formik';
import { withAuth, Back } from 'echess/components';
import { AddQuiz } from 'echess/components/Formik';
import { quiz } from 'echess/models';
import { create } from 'echess/controllers/quiz';
import { Layout } from '../../../components';

const Page = () => (
  <Layout role="teacher">
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/quizzes" />
        <h2 className="font-bold text-2xl">Add quiz</h2>
      </div>
      <Formik {...quiz} onSubmit={create}>
        {(props) => <AddQuiz {...props} />}
      </Formik>
    </div>
  </Layout>
);

export default withAuth(Page);
