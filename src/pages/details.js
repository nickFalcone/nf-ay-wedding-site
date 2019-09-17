import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from "../components/google-map"
import Weather from "../components/weather"

const Details = () => (

  <Layout>
    <SEO title="Details" />
    <section style={{ marginTop: `8rem`, textAlign: `center`,}}>
      <Weather />
      <GoogleMap />
    </section>
  </Layout>
)

export default Details