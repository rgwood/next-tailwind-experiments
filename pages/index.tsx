import '../styles/index.css'
import Layout from '../components/Layout'
import RecentArticles from '../components/RecentArticles';

export default () => (
  <Layout title="Home Page">
    <p>Made with Tailwind CSS and Next.js</p>
    <div className="mt-4">
      <RecentArticles/>
    </div>
  </Layout>
)