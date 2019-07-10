import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FourOhFourImage from "../components/FourOhFourImage"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Just like our debut 90's album, the page you're looking for doesn't exist...</h1>
    <FourOhFourImage />
  </Layout>
)

export default NotFoundPage
