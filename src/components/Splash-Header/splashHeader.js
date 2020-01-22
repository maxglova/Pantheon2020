import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../images/pantheon-logo.svg"
import regArrow from "../../images/btn-arrow-right.png"
import videoBtn from "../../images/splashVideoBtn.png"
import lastYearVideo from "../../images/2019-video.mp4"
import "./splashHeader.scss"


console.log(logo);



const Header = ({ siteTitle }) => (
  <div className="container-fluid">
  <div class="fullscreen-bg">
    <video autoPlay muted loop className="fullscreen-bg-video">
      <source src={lastYearVideo} type="video/mp4" />
      </video>
  </div>
  <div className="HeaderWrapperSplash">
    <div className="splashHeadLogoContainer">
      <div className="head-logo">
        <Link to="/">
          <img className="headerLogo" src={logo} alt="Pantheon Logo"/>
        </Link>
      </div>
      <div className="splashDetailsContainer">
        <p className="splashDateLocationHead">Pasadena, California</p>
        <p className="splashDateLocationHead">August 13 & 14, 2020</p>
      </div>
    </div>
    <div className="registerBtn">
        <Link className="reg-btn-splash" to="/registration">Registration
        </Link>
        <img className="head-reg-arrow-splash" src={regArrow} alt="register arrow" />
    </div>
  </div>
  <div className="mainContentContainer">
    <Link className="vidBtnContainer" to="">
      <img className="splashVideoBtn" src={videoBtn} />
    </Link>
    <h1 className="splash-bold-upper-head">SCALE YOUR BUSINESS. <br />REDESIGN AN INDUSTRY.</h1>
  </div>


  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

