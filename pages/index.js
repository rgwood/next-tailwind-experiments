import '../styles/index.css'
import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout title="Home Page">
    <p>Made with Tailwind CSS and Next.js</p>
    <p>
      <Link href="/article?id=test-id">
        <a>Test article</a>
      </Link>
    </p>
  </Layout>
)