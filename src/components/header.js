import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
      }}
    >
      <h1 style={{
        margin: 0,
        fontFamily: `Dancing Script`,
        display: `inline-block`,
      }}>
        <Link
          to="/"
          style={{
            color: `#0B2E0B`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{
        listStyleType: `none`,
        textAlign: `right`,
        margin: 0,
      }}>
        <li style={{display: `inline-block`, marginRight: `5px`, paddingRight: `5px`, borderRight: `1px solid #000`}}><Link to="/details/" style={{textDecoration: `none`}}>Details</Link></li>
        <li style={{display: `inline-block`, marginRight: `5px`, paddingRight: `5px`, borderRight: `1px solid #000`}}><Link to="/travel/" style={{textDecoration: `none`}}>Travel</Link></li>
        <li style={{display: `inline-block`, marginRight: `5px`, paddingRight: `5px`, borderRight: `1px solid #000`}}><Link to="/photos/" style={{textDecoration: `none`}}>Photos</Link></li>
        <li style={{display: `inline-block`, marginRight: `5px`, paddingRight: `5px`,}}><a href="https://www.williams-sonoma.com/registry/k98w8vrzw8/registry-list.html" target="_blank" rel="noopener noreferrer" style={{textDecoration: `none`}}>Registry</a></li>
      </ul>
      <p style={{margin: 0}}>April 4, 2020 | Charlotte, NC</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
