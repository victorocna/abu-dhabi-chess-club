import { withAuth, withRouter } from 'echess/components';
import { Teacher } from 'echess/components/Query';
import { Layout } from '../../../components';

const Page = ({ id }) => (
  <Layout>
    <Teacher teacher={id} />
  </Layout>
);

export default withRouter(withAuth(Page));
