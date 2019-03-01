import '../styles/index.css'
import Layout from '../components/Layout'
import {getName, getDescription} from '../services/data.service';

export default (props) => (
  <Layout title={getName(props.url.query.id)}>
      <p>ID: {props.url.query.id}</p>
      <p>{getDescription(props.url.query.id)}</p>
  </Layout>
)