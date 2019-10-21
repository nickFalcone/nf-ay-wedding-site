import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photos = () => (
  <Layout>
    <SEO title="Photos" />
    <section style={{ margin: `10rem auto`, padding: `1rem`, maxWidth: `30rem`, textAlign: `left`}}>
      <p><a href="https://www.alexanderimages.com/">AlexanderSouth Photography</a> will photograph our wedding and reception.</p>
      {/* <p>If you have photos you would like to share with us, you can email them to <a href="mailto:example@example.com">example@example.com</a> or <a href="#">upload to DropEvent</a>. Both options are free and do not require registration.</p> */}
    </section>
  </Layout>
)

export default Photos
