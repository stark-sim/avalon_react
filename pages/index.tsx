import Link from "next/link";
import IndexLayout from "../components/IndexLayout";

import Login from "../components/Login";

const IndexPage = () => (
  <IndexLayout title="Home | Next.js + TypeScript Example">
    <Login />
  </IndexLayout>
);

export default IndexPage;
