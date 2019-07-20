import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photos = () => (
  <Layout>
    <SEO title="Photos" />
    <section style={{ marginTop: `10rem`, textAlign: `center`,}}>
      {/* <h2 style={{ fontFamily: `Dancing Script`, }}>Photos</h2> */}
      <p>We're excited to have <a href="https://www.alexanderimages.com/">AlexanderSouth Photography</a> capture our special day.</p>
    </section>
  </Layout>
)

export default Photos
