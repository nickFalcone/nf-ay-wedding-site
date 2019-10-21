import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CitySkyline from "../components/city-skyline"

const Travel = () => (
  <Layout>
    <SEO title="Travel" />
      <CitySkyline />
    <section style={{ margin: `10rem auto`, padding: `1rem`, maxWidth: `30rem`, textAlign: `left`}}>
      <p><a
      href="https://www.google.com/flights?q=google+flights+to+charlotte+douglass&source=lnms&impression_in_search=true&mode_promoted=true&tbm=flm&sa=X&ved=0ahUKEwivptfamr3jAhXLmOAKHUxoB5AQ_AUIESgB#flt=.CLT.2020-04-04*CLT..2020-04-05;c:USD;e:1;s:0*0;sd:1;t:f"
      target="_blank" rel="noopener noreferrer">
        Direct flights to Charlotte</a> are available from most airports.</p>
      <p>Room blocks have been arranged at the Ritz-Carlton and Marriott City Center. Please ask for the Falcone wedding block.</p>
      <ul style={{listStyleType: `none`, margin: 0,}}>
        <li style={{margin: `40px auto`,}}><a href="https://www.ritzcarlton.com/en/hotels/charlotte" target="_blank" rel="noopener noreferrer">The Ritz-Carlton</a> / <a class="phone" style={{whiteSpace: `nowrap`, textDecoration: `none`, color: `#000`, border: `1px solid #000`, fontSize: `12px`, padding: `5px`, borderRadius: `15px`, fontFamily: `monospace`,}} href="tel:7045472244">(704) 547-2244</a></li>
        <li style={{margin: `40px auto`,}}><a href="https://www.marriott.com/hotels/travel/cltcc-charlotte-marriott-city-center/" target="_blank" rel="noopener noreferrer">Marriott City Center</a> / <a class="phone" style={{whiteSpace: `nowrap`, textDecoration: `none`, color: `#000`, border: `1px solid #000`, fontSize: `12px`, padding: `5px`, borderRadius: `15px`, fontFamily: `monospace`,}} href="tel:7043339000">(704) 333-9000</a></li>
      </ul>
      <p><em>The Marriott is a five-minute walk from the Ritz-Carlton, where the wedding and reception will take place.</em></p>
      {/* <p><a href="https://www.airbnb.com/s/Charlotte--North-Carolina--United-States/homes?refinement_paths%5B%5D=%2Fhomes&current_tab_id=home_tab&selected_tab_id=home_tab&source=structured_search_input_header&click_referer=t%3ASEE_ALL%7Csid%3A106550ca-7bac-47e6-81f8-b76fc6e9ac28%7Cst%3ALANDING_PAGE_MARQUEE&search_type=unknown&screen_size=large&hide_dates_and_guests_filters=true&ne_lat=35.24540413902089&ne_lng=-80.75362587093457&sw_lat=35.145945865571036&sw_lng=-80.92116737484082&zoom=13&search_by_map=true&checkin=2020-04-04&checkout=2020-04-05&adults=2&room_types%5B%5D=Entire%20home%2Fapt" 
      target="_blank" rel="noopener noreferrer">
        Airbnb</a> also has rentals in the area.</p> */}
      {/* <p>There is plenty to <a href="https://www.charlottesgotalot.com/" target="_blank" rel="noopener noreferrer">see and do</a> in Charlotte.</p>
      <p>Some of our favorite places include:</p>
      <ul style={{maxWidth: `200px`, textAlign: `left`, margin: `0 auto`,}}>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g49022-d2367131-Reviews-Freedom_Park-Charlotte_North_Carolina.html" target="_blank" rel="noopener noreferrer">Freedom Park</a></li>
        <li><a href="https://www.discoveryplace.org/" target="_blank" rel="noopener noreferrer">Discovery Place</a></li>
        <li><a href="https://www.milb.com/charlotte-knights" target="_blank" rel="noopener noreferrer">Charlotte Knights</a></li>
        <li><a href="https://www.simon.com/mall/southpark" target="_blank" rel="noopener noreferrer">SouthPark Mall</a></li>
      </ul> */}
    </section>
  </Layout>
)

export default Travel
