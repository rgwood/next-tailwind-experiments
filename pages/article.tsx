import '../styles/index.css'
import Layout from '../components/Layout'
import { getName, getDescription } from '../services/data.service';
import { withRouter, WithRouterProps, SingletonRouter } from 'next/router';

function queryIdIsDefined(props: React.PropsWithChildren<WithRouterProps<Record<string, string | string[] | undefined>>>): boolean {
  // This is mildly insane. Is there a better way?
  return !!props && !!props.router && !!props.router.query && !!props.router.query.id;
}

const idNotSpecifiedLayout = <Layout title="Article ID not specified">Sorry</Layout>

export default withRouter((props) => (
  <div>
    {queryIdIsDefined(props) ? <Layout title={getName(props.router.query.id)}>
    <p>ID: {props.router.query.id}</p>
    <p>{getDescription(props.router.query.id)}</p>
  </Layout>: idNotSpecifiedLayout
    }
  
  </div>
));