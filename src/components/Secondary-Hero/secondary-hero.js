import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"
import HeaderSpacer from "../HeaderSpacer/headerSpacer.js"



const SecondaryHero = (props) => (
  <div className="secondaryHeroWrapper">
    <HeaderSpacer />
    <div className="container-fluid inner-hero-row" style={{ backgroundImage: `url(${props.bgImg})` }}>
      <div className="col-sm-12 innerHeroContentsContainer">
        <h1 className="innerHeroHeader bold-upper-head">{props.HeaderTxt}</h1>
        <img src={props.innerSubHead} alt={props.innerSubHeadAltTxt} className="innerSubHead" />
      </div>
    </div>
  </div>
)


export default SecondaryHero

