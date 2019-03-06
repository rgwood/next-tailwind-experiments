import '../styles/index.css'
import Layout from '../components/Layout'
import { loadFullArticle } from '../services/data.service';
import { withRouter, WithRouterProps } from 'next/router';

function queryIdIsDefined(props: React.PropsWithChildren<WithRouterProps<Record<string, string | string[] | undefined>>>): boolean {
  // This is mildly insane. Is there a better way?
  return !!props && !!props.router && !!props.router.query && !!props.router.query.id;
}

const idNotSpecifiedLayout = <Layout title="Article ID not specified">Sorry</Layout>

export default withRouter((props) => {
  if(!queryIdIsDefined(props)) {
    return idNotSpecifiedLayout;
  }

  const article = loadFullArticle(props.router.query.id);
  return <Layout title={article.name}>
    <p>ID: {article.id}</p>
    <p>{article.description}</p>
  </Layout>
});