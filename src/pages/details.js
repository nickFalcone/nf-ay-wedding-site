import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from "../components/google-map"
import Weather from "../components/weather"

const Details = () => (

  <Layout>
    <SEO title="Details" />
    <section style={{ marginTop: `10rem`, textAlign: `center`,}}>
    <p style={{ fontSize: `24px`, margin: `1rem 0 0 0`, fontFamily: `Dancing Script`, lineHeight: `16px` }}>Current forecast</p>
      <Weather />
      <GoogleMap />
    </section>
  </Layout>
)

export default Details