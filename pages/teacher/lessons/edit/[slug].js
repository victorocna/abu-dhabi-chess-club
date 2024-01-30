import { withAuth, withRouter, Back } from 'echess/components';
import { LessonForm } from 'echess/components/Teacher';
import { Layout } from '../../../../components';

const Page = ({ id }) => (
  <Layout role="teacher">
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/teacher/lessons" />
        <h2 className="font-bold text-2xl">Edit lesson</h2>
      </div>
      <LessonForm lesson={id} />
    </div>
  </Layout>
);

export default withRouter(withAuth(Page));
