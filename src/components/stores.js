import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Stores = () => {
  const data = useStaticQuery(graphql`
    query {
      wsm: file(relativePath: { eq: "ws-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      pbm: file(relativePath: { eq: "pb-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
      wem: file(relativePath: { eq: "we-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
          }
        }
      }
    }
  `)
  const ws = [data.wsm.childImageSharp.fluid]
  const pb = [data.pbm.childImageSharp.fluid]
  const we = [data.wem.childImageSharp.fluid]

  return (
    <main>
      <section class={`store`}>
        <a
          href={`https://www.williams-sonoma.com/registry/k98w8vrzw8/registry-list.html`}
          target={`_blank`}
          rel={`noopener noreferrer`}
        >
          <Img
            fluid={ws}
            alt={`Williams-Sonoma wedding registry`}
            style={{
              width: "150px",
              margin: "10px auto",
              backgroundColor: "#f5f5f5",
              display: "inline-block",
            }}
            fadeIn={false}
            durationFadeIn={0}
          />
        </a>
      </section>
      <section class={`store`}>
        <a
          href={`https://www.potterybarn.com/registry/k98w8vrzw8/registry-list.html`}
          target={`_blank`}
          rel={`noopener noreferrer`}
        >
          <Img
            fluid={pb}
            alt={`Pottery Barn wedding registry`}
            style={{
              width: "150px",
              margin: "10px auto",
              backgroundColor: "#f5f5f5",
              display: "inline-block",
            }}
            fadeIn={false}
            durationFadeIn={0}
          />
        </a>
      </section>
      <section class={`store`}>
        <a
          href={`https://www.westelm.com/registry/k98w8vrzw8/registry-list.html`}
          target={`_blank`}
          rel={`noopener noreferrer`}
        >
          <Img
            fluid={we}
            alt={`West Elm wedding registry`}
            style={{
              width: "150px",
              margin: "10px auto",
              backgroundColor: "#f5f5f5",
              display: "inline-block",
            }}
            fadeIn={false}
            durationFadeIn={0}
          />
        </a>
      </section>
    </main>
  )
}

export default Stores
