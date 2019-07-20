import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from "../components/google-map";

const Details = () => (
  <Layout>
    <SEO title="Details" />
    <section style={{ marginTop: `10rem`, textAlign: `center`,}}>
      {/* <h2 style={{ fontFamily: `Dancing Script`, }}>Details</h2> */}
      <GoogleMap />
    </section>
  </Layout>
)

export default Details
