import '../styles/index.css'
import Layout from '../components/Layout'
import { getName, getDescription } from '../services/data.service';
import { withRouter } from 'next/router';

export default withRouter((props) => (
  <Layout title={getName(props.router.query.id)}>
    <p>ID: {props.router.query.id}</p>
    <p>{getDescription(props.router.query.id)}</p>
  </Layout>
));