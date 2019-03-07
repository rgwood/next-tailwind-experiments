import '../styles/index.css'
import Layout from '../components/Layout'
import RecentArticles from '../components/RecentArticles';
import Search from '../components/Search';
import Clock from '../components/Clock';
import { withRouter } from 'next/router';

export default withRouter((props) => {
  if (!!props.router) {
    return <Layout title="Home Page">
      <p>Made with Tailwind CSS and Next.js</p>
      <Clock/>
      <Search/>
      <div className="mt-4">
        <RecentArticles />
      </div>
    </Layout>
  }
  else {
    throw new Error("Router not defined. Something's up with Next.js");
  }
}
)
