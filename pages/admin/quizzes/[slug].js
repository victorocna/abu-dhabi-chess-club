import { withAuth, withRouter, withQuery } from 'echess/components';
import { Quiz } from 'echess/components/Admin';
import { fetchQuiz } from 'echess/controllers/quiz';
import { Layout } from '../../../components';

const Page = ({ slug }) => {
  const QuizWithQuery = withQuery(Quiz, slug, fetchQuiz);

  return (
    <Layout>
      <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
        <QuizWithQuery />
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
