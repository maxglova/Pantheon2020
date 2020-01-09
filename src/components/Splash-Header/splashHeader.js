import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../images/pantheon-logo.svg"
import regArrow from "../../images/btn-arrow-right.png"
import videoBtn from "../../images/splashVideoBtn.png"
import "./splashHeader.scss"


console.log(logo);



const Header = ({ siteTitle }) => (
  <div className="container-fluid">
  <div className="HeaderWrapper">
    <ul>
      <li className="head-logo">
        <Link to="/">
          <img className="headerLogo" src={logo} alt="Pantheon Logo"/>
        </Link>
      </li>
      <li>
        <p className="dateLocationHead">Pasadena, California</p>
        <p className="dateLocationHead">August 13 & 14, 2020</p>
      </li>
    </ul>
    <div className="registerBtn">
        <Link className="reg-btn" to="/registration">Registration
        </Link>
        <img className="head-reg-arrow" src={regArrow} alt="register arrow" />
    </div>
  </div>
  <div className="mainContentContainer">
    <Link className="vidBtnContainer" to="">
      <img className="splashVideoBtn" src={videoBtn} />
    </Link>
    <h1 className="bold-upper-head">SCALE YOUR BUSINESS. <br />REDESIGN AN INDUSTRY.</h1>
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

