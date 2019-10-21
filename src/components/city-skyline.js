import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CitySkyline = () => {
  const data = useStaticQuery(graphql`
  query {
    mobileImage: file(relativePath: { eq: "charlotte_skyline.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    desktopImage: file(relativePath: { eq: "charlotte_skyline.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
  }
`)
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <div>
      <Img
        fluid={sources}
        alt={`charlotte skyline`}
        style={{
          margin: "0 auto",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -999,
          opacity: 0.10,
          maxWidth: `1028px`,
        }}
        fadeIn={false}
        durationFadeIn={0}
      />
    </div>
  )
}

export default CitySkyline
