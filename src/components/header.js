import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      textAlign: `center`,
      background: `linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.80), rgba(255, 255, 255, 0.80), rgba(255, 255, 255, 0))`,
      position: `absolute`,
      right: 0,
      zIndex: 999,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: `100vw`,
        padding: `1rem`,
      }}
    >
      <h1 style={{
        fontSize: `38px`,
        margin: 0,
        paddingBottom: `1rem`,
        fontFamily: `Dancing Script`,
        fontWeight: 300,
        display: `inline-block`,
      }}>
        <Link
          to="/"
          style={{
            color: `#242424`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{
        fontSize: `16px`,
        listStyleType: `none`,
        textAlign: `center`,
        margin: `0 0 0 15px`,
        fontVariant: `small-caps`,
      }}>
        <li style={{display: `inline-block`, marginRight: `10px`, paddingRight: `10px`, borderRight: `1px solid #000`}}><Link to="/details/" style={{textDecoration: `none`, color: `#242424`, padding: `4px`,}} activeStyle={{color: `#fff`, backgroundColor: `#000`}}>Details</Link></li>
        <li style={{display: `inline-block`, marginRight: `10px`, paddingRight: `10px`, borderRight: `1px solid #000`}}><Link to="/travel/" style={{textDecoration: `none`, color: `#242424`, padding: `4px`,}} activeStyle={{color: `#fff`, backgroundColor: `#000`}}>Travel</Link></li>
        <li style={{display: `inline-block`, marginRight: `10px`, paddingRight: `10px`, borderRight: `1px solid #000`}}><Link to="/photos/" style={{textDecoration: `none`, color: `#242424`, padding: `4px`,}} activeStyle={{color: `#fff`, backgroundColor: `#000`}}>Photos</Link></li>
        <li style={{display: `inline-block`, marginRight: `10px`, paddingRight: `10px`,}}><a href="https://www.williams-sonoma.com/registry/k98w8vrzw8/registry-list.html" target="_blank" rel="noopener noreferrer" style={{textDecoration: `none`, color: `#242424`,}}>Registry</a></li>
      </ul>
      <p style={{
        margin: 0,
        fontSize: `16px`,
        fontVariant: `small-caps`,
        }}>
          April 4, 2020 | Charlotte, NC
      </p>
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
