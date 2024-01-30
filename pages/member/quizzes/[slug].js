import { withAuth, withRouter, withQuery } from 'echess/components';
import { Quiz } from 'echess/components/Member';
import { fetch } from 'echess/functions';
import { Layout } from '../../../components';

const Page = ({ id }) => {
  const QuizWithQuery = withQuery(Quiz, `quizzes/${id}`, fetch);

  return (
    <Layout role="member">
      <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
        <QuizWithQuery />
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
