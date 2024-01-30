import { withAuth, withRouter, Back } from 'echess/components';
import { Diagram } from 'echess/components/Query';
import { Layout } from '../../../components';

const Page = ({ id }) => (
  <Layout role="teacher">
    <div className="bg-white lg:border rounded-lg shadow py-4 lg:py-8">
      <div className="flex items-center mb-4 px-4 lg:px-8">
        <Back to="/admin/diagrams" />
        <h1 className="font-bold text-2xl">Diagram details</h1>
      </div>
      <div className="px-4 lg:px-8 grid gap-8 lg:grid-cols-2">
        <Diagram diagram={id} />
      </div>
    </div>
  </Layout>
);

export default withRouter(withAuth(Page));
