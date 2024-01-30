import { withAuth, withRouter, Back } from 'echess/components';
import { QuizForm } from 'echess/components/Admin';
import { Layout } from '../../../../components';

const Page = ({ id }) => (
  <Layout>
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/quizzes" />
        <h2 className="font-bold text-2xl">Update quiz</h2>
      </div>
      <QuizForm quiz={id} />
    </div>
  </Layout>
);

export default withRouter(withAuth(Page));
