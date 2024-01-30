import { withAuth, withRouter, Tag } from 'echess/components';
import { DiagramsWrapper } from 'echess/components/Lists';
import { objectId } from 'echess/functions';
import { Layout } from '../../../components';

const Page = ({ slug }) => (
  <Layout role="teacher">
    <Tag slug={slug} />
    <DiagramsWrapper
      options={{
        tags: objectId.from(slug),
      }}
    />
  </Layout>
);

export default withRouter(withAuth(Page));
