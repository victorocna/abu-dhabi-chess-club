import { useQuery } from 'react-query';
import { withAuth, withRouter, Loading, Warning } from 'echess/components';
import { LiveLesson } from 'echess/components/Admin';
import { fetchLiveLesson } from 'echess/controllers/live';

const Page = ({ slug }) => {
  const { data, status, error } = useQuery(slug, fetchLiveLesson);
  if (status === 'loading') {
    return <Loading />;
  }
  if (error && error instanceof Error) {
    return <Warning />;
  }
  return <LiveLesson {...data} slug={slug} />;
};

export default withRouter(withAuth(Page));
