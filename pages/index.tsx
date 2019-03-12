import '../styles/index.css'
import Layout from '../components/Layout'
import RecentArticles from '../components/RecentArticles';
import Search from '../components/Search';
import Clock from '../components/Clock';

export default () => {
  return <Layout title="Cities and Code Scrapbook">
    <p>Made with Tailwind CSS and Next.js</p>

    <div className="mt-4">
      <Clock />
    </div>
    <div className="mt-4">
      <Search />
    </div>
    <div className="mt-4">
      <RecentArticles />
    </div>
  </Layout>
}
