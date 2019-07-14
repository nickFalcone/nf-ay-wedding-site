import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CoverImage = () => {
  const data = useStaticQuery(graphql`
  query {
    mobileImage: file(relativePath: { eq: "cover-bw-sm.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    desktopImage: file(relativePath: { eq: "cover-bw.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
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
          margin: "0 auto", // Used to center the image
        }}
      />
    </div>
  )
}

export default CoverImage
