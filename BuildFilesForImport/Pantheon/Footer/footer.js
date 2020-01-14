import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../../images/Pantheon/pantheon-logo.svg"
import "./footer.less"
import "../Header/header.less" 
import "../global.less"

import insta from "../../../images/Pantheon/Icons/icon-instagram.png"
import facebook from "../../../images/Pantheon/Icons/icon-facebook.png"
import linkedin from "../../../images/Pantheon/Icons/icon-linkedin.png"
import twitter from "../../../images/Pantheon/Icons/icon-twitter.png"
import youtube from "../../../images/Pantheon/Icons/icon-youtube.png"


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
        <img src={twitter} className="footer-icons"/>
        <img src={facebook} className="footer-icons"/>
        <img src={youtube} className="footer-icons"/>
        <img src={linkedin} className="footer-icons"/>
        <img src={insta} className="footer-icons"/>
      </div>
    </div>
  </div>
)

export default Footer

