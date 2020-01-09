import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../images/pantheon-logo.svg"
import regArrow from "../../images/btn-arrow-right.png"
import videoBtn from "../../images/splashVideoBtn.png"
import "./splashHeader.scss"
import "//fast.wistia.com/assets/external/E-v1.js"


console.log(logo);



const Header = ({ siteTitle }) => (
  <div className="container-fluid">
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
    <h1 className="bold-upper-head">SCALE YOUR BUSINESS. <br />REDESIGN AN INDUSTRY.</h1>
  </div>

  <div class="col-md-12" style="padding: 0px;">
            <script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async=""></script>
            <div class="wistia_embed wistia_async_soae5795cd popover=true popoverContent=html autoplay=true wistia_embed_initialized" style="display:inline-block; white-space:nowrap;" id="wistia-soae5795cd"><div id="wistia_29.thumb_container" class="wistia_click_to_play" style="position: relative; height: 237.969px; width: 342.986px;">
              <div id="wistia_13.thumb_container" style="">
              <div>
              <img src="https://get.servicetitan.com/rs/304-EAE-038/images/chrisHunterVideoThumbnail.png" className="splashVideoBtn" />
              </div>
            </div>
            </div>
            </div>
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

