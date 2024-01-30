import { withAuth, withRouter } from 'echess/components';
import { Member, MyLessons, MyQuizzes, LessonAccess, QuizAccess } from 'echess/components/Query';
import { Layout } from '../../../components';

const Page = ({ id }) => (
  <Layout>
    <Member member={id} />
    <LessonAccess member={id} />
    <QuizAccess member={id} />
    <MyLessons member={id} />
    <MyQuizzes member={id} />
  </Layout>
);

export default withRouter(withAuth(Page));
