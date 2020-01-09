import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../images/pantheon-logo.svg"
import "./footer.scss"
import "../Header/header.scss" 
import "../global.scss"

console.log(logo);

const Footer = ({ siteTitle }) => (
  <div className="FooterWrapper">
    <div className="FooterContentContainer">
      <div className="footerNavBrand">
          <Link to="/">
          <img className="footerLogo" src={logo} alt="Pantheon Logo" />
          </Link>
      </div>
    </div>
    <div className="FooterContentContainer">
      <p>Copywrite 2020</p>
    </div>
    <div className="FooterContentContainer">
      <div className="social-links">
        <h2>This is some shit</h2>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

