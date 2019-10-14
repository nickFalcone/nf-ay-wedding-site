import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CoverImage = () => {
  const data = useStaticQuery(graphql`
  query {
    mobileImage: file(relativePath: { eq: "cover-bw-sm-red.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    desktopImage: file(relativePath: { eq: "cover-bw-red.jpg" }) {
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
        alt={`nick and alesa`}
        style={{
          height: "100vh",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
        fadeIn={false}
        durationFadeIn={0}
      />
    </div>
  )
}

export default CoverImage
