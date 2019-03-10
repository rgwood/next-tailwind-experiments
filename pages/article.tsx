import '../styles/index.css'
import Layout from '../components/Layout'
import { loadFullArticle } from '../services/data.service';
import { withRouter, WithRouterProps } from 'next/router';
import { useState, useEffect } from 'react';
import {Article} from '../models/article';

function queryIdIsDefined(props: React.PropsWithChildren<WithRouterProps<Record<string, string | string[] | undefined>>>): boolean {
  // This is mildly insane. Is there a better way?
  return !!props && !!props.router && !!props.router.query && !!props.router.query.id;
}

const idNotSpecifiedLayout = <Layout title="Article ID not specified">Sorry</Layout>

export default withRouter((props) => {
  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    loadFullArticle(props.router.query.id).then(
      result => {
        console.log({result});
        setArticle(result);
    })
  }, []);

  // TODO: fix this so it doesn't show the "id not specified" view briefly before loading content
  if(!queryIdIsDefined(props) || !article ) {
    return idNotSpecifiedLayout;
  }

  return <Layout title={article.name}>
    <p className="mt-3">{article.description}</p>
  </Layout>
});