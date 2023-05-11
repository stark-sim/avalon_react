import Link from 'next/link'
import IndexLayout from '../components/IndexLayout'

const AboutPage = () => (
  <IndexLayout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </IndexLayout>
)

export default AboutPage
