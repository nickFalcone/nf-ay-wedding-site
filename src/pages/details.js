import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from "../components/google-map";

const Details = () => (
  <Layout>
    <SEO title="Details" />
    <div style={{ marginTop: `10rem`, textAlign: `center`,}}>
      <h1>Details</h1>
      <GoogleMap />
    </div>
  </Layout>
)

export default Details
