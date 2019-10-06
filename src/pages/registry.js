import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stores from "../components/stores"

const Registry = () => (
  <Layout>
    <SEO title="Registry" />
    <section style={{ marginTop: `10rem`, textAlign: `center` }}>
      <Stores />
    </section>
  </Layout>
)

export default Registry
