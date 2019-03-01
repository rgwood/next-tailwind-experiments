import '../styles/index.css'
import Layout from '../components/Layout'
import RecentArticles from '../components/RecentArticles';
import Link from 'next/link'

export default () => (
  <Layout title="Home Page">
    <p>Made with Tailwind CSS and Next.js</p>
    <p className="mt-4">
      <RecentArticles/>
    </p>
  </Layout>
)