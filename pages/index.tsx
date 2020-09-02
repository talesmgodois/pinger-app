import Link from "next/link";
import Layout from "../components/Layout";
import { AddPinger } from "../components/AddPinger";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <AddPinger />
    {/* <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>

      <Button variant="contained" color="primary">
        Primary
      </Button>
    </p> */}
  </Layout>
);

export default IndexPage;
