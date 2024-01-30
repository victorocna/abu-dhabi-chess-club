import { Back, withAuth } from 'echess/components';
import { UploadBox } from 'echess/components/Diagrams';
import { Layout } from '../../../components';

const Page = () => (
  <Layout>
    <div className="flex flex-wrap items-center mb-4">
      <Back to="/admin/diagrams" />
      <h1 className="font-bold text-2xl mr-2">Upload diagrams</h1>
    </div>

    <UploadBox />
  </Layout>
);

export default withAuth(Page);
