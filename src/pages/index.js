import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import CoverImage from "../components/cover-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Nick &amp; Alesa's Wedding" />
    <div style={{ maxWidth: `100%`}}>
      <CoverImage />
    </div>
  </Layout>
)

export default IndexPage
