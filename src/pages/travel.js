import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Travel = () => (
  <Layout>
    <SEO title="Travel" />
    <section style={{ marginTop: `10rem`, textAlign: `center`,}}>
      {/* <h2 style={{ fontFamily: `Dancing Script`, }}>Travel</h2> */}
      <p>Charlotte is approximately a <a
      href="https://www.google.com/flights?q=google+flights+to+charlotte+douglass&source=lnms&impression_in_search=true&mode_promoted=true&tbm=flm&sa=X&ved=0ahUKEwivptfamr3jAhXLmOAKHUxoB5AQ_AUIESgB#flt=.CLT.2020-04-04*CLT..2020-04-05;c:USD;e:1;sd:1;t:f"
      target="_blank" rel="noopener noreferrer"
      >two hour flight</a> from most locations on the East Coast.</p>
      <p>There is plenty to <a href="https://www.charlottesgotalot.com/" target="_blank" rel="noopener noreferrer">see and do</a> in Charlotte.</p>
      <p>Some of our favorite places include:</p>
      <ul style={{maxWidth: `200px`, textAlign: `left`, margin: `0 auto`,}}>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g49022-d2367131-Reviews-Freedom_Park-Charlotte_North_Carolina.html" target="_blank" rel="noopener noreferrer">Freedom Park</a></li>
        <li><a href="https://www.discoveryplace.org/" target="_blank" rel="noopener noreferrer">Discovery Place</a></li>
        <li><a href="https://www.milb.com/charlotte-knights" target="_blank" rel="noopener noreferrer">Charlotte Knights</a></li>
        <li><a href="https://www.simon.com/mall/southpark" target="_blank" rel="noopener noreferrer">SouthPark Mall</a></li>
      </ul>
    </section>
  </Layout>
)

export default Travel
