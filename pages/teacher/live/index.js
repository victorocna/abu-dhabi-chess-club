import { Link, withAuth } from 'echess/components';
import { LiveLessons } from 'echess/components/Lists';
import { Layout } from '../../../components';

const Page = () => (
  <Layout role="teacher">
    <div className="flex items-center mb-4">
      <h1 className="font-bold text-2xl mr-2">Live Lessons</h1>
      <Link href="/teacher/live/add">Start Live Lesson</Link>
    </div>
    <LiveLessons />
  </Layout>
);

export default withAuth(Page);
