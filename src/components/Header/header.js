import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../images/pantheon-logo.svg"
import regArrow from "../../images/btn-arrow-right.png"
import "./header.scss"
import "../global.scss"

console.log(logo);



const Header = ({ siteTitle }) => (
  <div className="HeaderWrapper">
    <div className="headerContentContainer">
      <div className="navBrand">
          <Link to="/">
            <img className="headerLogo" src={logo} alt="Pantheon Logo"/>
          </Link>
      </div>
      <nav className="navLinks">
            <ul className="navList">
              <li>
                <Link to="/registration">Agenda</Link>
              </li>
              <li>
                <Link to="/404">Why Attend</Link>
              </li>
              <li>
                <Link to="/page-2">Travel</Link>
              </li>
              <li>
                <Link to="/index">About</Link>
              </li>
              <li className="reg-btn-container">
              <Link className="reg-btn" to="/registration">Registration
              </Link>
              <img className="head-reg-arrow" src={regArrow} alt="register arrow" />
            </li>
            </ul>
      </nav> 
    </div>
    <div className="mobileNav" role="navigation">
    <Link to="/">
      <img className="headerLogo" src={logo} alt="Pantheon Logo"/>
    </Link>
    <div class="collapsible-menu">
    <label for="menu">
    </label>
    <input type="checkbox" id="menu"></input>
    <div class="menu-content">
        <ul>
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>Services</li>
            <li><a href="#"></a>Projects</li>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Blog</li>
            <li><a href="#"></a>Contacts</li>
        </ul>
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

