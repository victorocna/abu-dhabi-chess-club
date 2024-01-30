import { withAuth, withQuery } from 'echess/components';
import { Activity, QuickStats } from 'echess/components/Admin';
import { fetchStats } from 'echess/controllers/my';
import { Layout } from '../../components';

const Page = () => {
  const QuickStatsWithQuery = withQuery(QuickStats, `my/stats`, fetchStats);

  return (
    <Layout>
      <QuickStatsWithQuery />
      <Activity />
    </Layout>
  );
};

export default withAuth(Page);
