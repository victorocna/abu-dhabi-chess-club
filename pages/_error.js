import { ErrorPage } from 'echess/components';

const NextErrorPage = ({ statusCode }) => {
  return <ErrorPage statusCode={statusCode} />;
};

NextErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default NextErrorPage;
