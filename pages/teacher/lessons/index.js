import { Link, withAuth } from 'echess/components';
import { LessonList } from 'echess/components/Teacher';
import { Layout } from '../../../components';

const Page = () => (
  <Layout role="teacher">
    <div className="flex items-center mb-4">
      <h1 className="font-bold text-2xl mr-2">Lesson list</h1>
      <Link href="/teacher/lessons/add">Add lessons</Link>
    </div>
    <LessonList />
  </Layout>
);

export default withAuth(Page);
