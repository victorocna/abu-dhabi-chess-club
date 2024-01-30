import { withAuth, withQuery } from 'echess/components';
import { QuickStats } from 'echess/components/Teacher';
import { fetchStats } from 'echess/controllers/my';
import { Layout } from '../../components';

const Page = () => {
  const QuickStatsWithQuery = withQuery(QuickStats, `my/stats`, fetchStats);

  return (
    <Layout role="teacher">
      <QuickStatsWithQuery />
    </Layout>
  );
};

export default withAuth(Page);
