import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Travel = () => (
  <Layout>
    <SEO title="Travel" />
    <section className="covid">
      <p style={{ margin: `200px auto 0`, maxWidth: `500px`, fontSize: `22px`, lineHeight: `30px`, textAlign: `center`, padding: `5px`, border: `5px solid red`,}}>Please see guidance from the CDC on <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-in-the-us.html">Coronavirus and Travel in the United States</a>.</p>
    </section>
  </Layout>
)

export default Travel
