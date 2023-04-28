import Link from 'next/link'
import Layout from '../components/Layout'

import { Button } from 'antd';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <div>
      <Button type="primary">Hello World!</Button>
    </div>
  </Layout>
)

export default IndexPage
