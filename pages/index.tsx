import Link from "next/link";
import IndexLayout from "../components/IndexLayout";

import Login from "../components/Login";

const IndexPage = () => (
  <IndexLayout title="友友游">
    <Login />
  </IndexLayout>
);

export default IndexPage;
