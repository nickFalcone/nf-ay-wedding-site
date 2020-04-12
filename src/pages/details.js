import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import GoogleMap from "../components/google-map"
// import Weather from "../components/weather"

const Details = () => (

  <Layout>
    <SEO title="Details" />
    <section style={{ margin: `10rem auto`, textAlign: `left`, maxWidth: `450px`, }}>
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

export default Details