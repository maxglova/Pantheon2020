import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../images/pantheon-logo.svg"
import "./footer.scss"
import "../Header/header.less" 
import "../global.scss"

import insta from "../../images/Icons/icon-instagram.png"
import facebook from "../../images/Icons/icon-facebook.png"
import linkedin from "../../images/Icons/icon-linkedin.png"
import twitter from "../../images/Icons/icon-twitter.png"
import youtube from "../../images/Icons/icon-youtube.png"


console.log(logo);

const Footer = ({ siteTitle }) => (
  <div className="FooterWrapper">
    <div className="FooterContentContainer">
      <div className="footerNavBrand">
          <Link to="/">
          <img className="footerLogo" src={logo} alt="Pantheon Logo" />
          </Link>
      </div>
      <p class="footer-copywrite">Copywrite 2020</p>
    </div>
    <div className="FooterContentContainer">
      <div className="footer-social-links">
        <img src={twitter} className="footer-icons" alt="footer icon"/>
        <img src={facebook} className="footer-icons" alt="footer icon"/>
        <img src={youtube} className="footer-icons" alt="footer icon"/>
        <img src={linkedin} className="footer-icons" alt="footer icon"/>
        <img src={insta} className="footer-icons" alt="footer icon"/>
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

