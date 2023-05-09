import Link from "next/link";
import Layout from "../components/Layout";

import Login from "../components/Login";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Login />
  </Layout>
);

export default IndexPage;
