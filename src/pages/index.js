import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import CoverImage from "../components/cover-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Nick &amp; Alesa's Wedding" />
    {/* <main style={{ maxWidth: `100%`}}>
      <CoverImage />
    </main> */}
    <section style={{ margin: `10rem auto`, textAlign: `left`, maxWidth: `350px`, }}>
      {/* <Weather />
      <GoogleMap /> */}
      <p style={{ textAlign: `right`,}}>March 14, 2020</p>
      <p>To our guests,</p>
      <p>In light of the coronavirus pandemic, we have postponed our wedding originally planned for April 4th.</p>
      <p>Unfortunately, this is the only responsible way forward. We're working on rescheduling in the fall&mdash;date &amp; time TBD.</p>
      <p>Thank you for your kind words of encouragement. We look forward to seeing you all when this is behind us.</p>
      <p style={{ paddingLeft: `10px`,}}><span role="img" aria-label="love">❤️</span> Nick &amp; Alesa</p>
    </section>
  </Layout>
)

export default IndexPage
