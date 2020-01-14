import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../../images/Pantheon/pantheon-logo.svg"
import regArrow from "../../../images/Pantheon/Icons/btn-arrow-right.png"
import "./header.less"
import "../global.less"

console.log(logo);



const Header = ({ siteTitle }) => (
  <div className="HeaderWrapper">
    <div className="headerContentContainer">
      <div className="logoDetailsContainer">
        <div className="navBrand">
            <Link to="/">
              <img className="headerLogo" src={logo} alt="Pantheon Logo"/>
            </Link>
        </div>
        <div className="navDetails">
          <p>Pasadena, California</p>
          <p>August 13 & 14</p>
        </div>
      </div>
      <div className="navLinks">
            <ul className="navList">
              <li>
                <Link to="/registration">Agenda</Link>
              </li>
              <li>
                <Link to="/page-2">Travel</Link>
              </li>
              <li>
                <Link to="/index">About</Link>
              </li>
              <li className="head-reg-btn-container">
              <Link className="reg-btn" to="/register">Registration
              </Link>
              <img className="head-reg-arrow" src={regArrow} alt="register arrow" />
            </li>
            </ul>
      </div> 
    </div>
    <div className="mobileNav" role="navigation">
    <div className="logoDetailsContainer">
        <div className="navBrand">
            <Link to="/">
              <img className="headerLogo" src={logo} alt="Pantheon Logo"/>
            </Link>
        </div>
        <div className="navDetails">
          <p>Pasadena, California</p>
          <p>August 13 & 14</p>
        </div>
      </div>
    <div class="collapsible-menu">
    <label htmlFor="menu">
    </label>
    <input type="checkbox" id="menu"></input>
    <div class="menu-content">
        <ul>
            <li><a href="#"></a>Agenda</li>
            <li><a href="#"></a>Travel</li>
            <li><a href="#"></a>About</li>
            <li className="reg-btn-container mobile-reg">
              <Link className="reg-btn mobile-reg" to="/register">Registration
              </Link>
            </li>
        </ul>
    </div>
  </div>
  </div> 
  </div>
)

export default Header
