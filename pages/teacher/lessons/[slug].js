import { withAuth, withRouter, withQuery } from 'echess/components';
import { Lesson } from 'echess/components/Teacher';
import { fetchLesson } from 'echess/controllers/lesson';
import { Layout } from '../../../components';

const Page = ({ slug }) => {
  const LessonWithQuery = withQuery(Lesson, slug, fetchLesson);

  return (
    <Layout role="teacher">
      <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
        <LessonWithQuery />
      </div>
    </Layout>
  );
};

export default withRouter(withAuth(Page));
