import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      textAlign: `center`,
      background: `linear-gradient(rgba(255, 255, 255, 1.0), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))`,
      position: `absolute`,
      right: 0,
      zIndex: 999,
    }}
  >
    <section
      style={{
        margin: `0 auto`,
        width: `100vw`,
        padding: `1rem`,
      }}
    >
      <h1
        style={{
          margin: 0,
          paddingBottom: `0.5rem`,
          fontFamily: `Dancing Script`,
          fontWeight: 300,
          display: `inline-block`,
        }}
      >
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
      <nav>
        <ul
          style={{
            listStyleType: `none`,
            textAlign: `center`,
            margin: `0 0 5px 0`,
            fontVariant: `small-caps`,
          }}
        >
          <li
            style={{
              display: `inline-block`,
              margin: 0,
              padding: `10px`,
              borderRight: `1px solid #000`,
            }}
          >
            <Link
              to="/details/"
              style={{
                textDecoration: `none`,
                color: `#242424`,
                padding: `4px`,
              }}
              activeStyle={{
                borderBottom: `1px solid #000`,
                paddingBottom: `12px`,
                color: `#000`,
              }}
            >
              Details
            </Link>
          </li>
          <li
            style={{
              display: `inline-block`,
              margin: 0,
              padding: `10px`,
              borderRight: `1px solid #000`,
            }}
          >
            <Link
              to="/travel/"
              style={{
                textDecoration: `none`,
                color: `#242424`,
                padding: `4px`,
              }}
              activeStyle={{
                borderBottom: `1px solid #000`,
                paddingBottom: `12px`,
                color: `#000`,
              }}
            >
              Travel
            </Link>
          </li>
          <li
            style={{
              display: `inline-block`,
              margin: 0,
              padding: `10px`,
              borderRight: `1px solid #000`,
            }}
          >
            <Link
              to="/photos/"
              style={{
                textDecoration: `none`,
                color: `#242424`,
                padding: `4px`,
              }}
              activeStyle={{
                borderBottom: `1px solid #000`,
                paddingBottom: `12px`,
                color: `#000`,
              }}
            >
              Photos
            </Link>
          </li>
          <li
            style={{
              display: `inline-block`,
              margin: 0,
              padding: `10px`,
            }}
          >
            <Link
              to="/registry/"
              style={{
                textDecoration: `none`,
                color: `#242424`,
                padding: `4px`,
              }}
              activeStyle={{
                borderBottom: `1px solid #000`,
                paddingBottom: `12px`,
                color: `#000`,
              }}
            >
              Registry
            </Link>
          </li>
        </ul>
      </nav>
      <date
        style={{
          marginLeft: `-5px`,
          fontSize: `16px`,
          fontVariant: `small-caps`,
        }}
        className="datePlace"
      >
        April 4, 2020 | Charlotte, NC
      </date>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
