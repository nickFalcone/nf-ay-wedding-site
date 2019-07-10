// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer
    style={{
      color: `#f1f1f1`,
      backgroundColor: `#202020`,
      textAlign: `center`,
      fontSize: `12px`,
    }}
  >
    © {new Date().getFullYear()} Nick Falcone
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
