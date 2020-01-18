import React from "react"
import "./style.scss"
import HeaderSpacer from "../HeaderSpacer/headerSpacer.js"



const SecondaryHeroWSubHead = (props) => (
  <div className="secondaryHeroWrapper-wSubHead">
    <HeaderSpacer />
    <div className="container-fluid inner-hero-row-wSubHead" style={{ backgroundImage: `url(${props.bgImg})` }}>
      <div className="col-sm-12 innerHeroContentsContainer-wSubHead">
        <h1 className="innerHeroHeader-wSubHead bold-upper-head">{props.HeaderTxt}</h1>
        <img src={props.innerSubHead} alt={props.innerSubHeadAltTxt} className="innerSubHead-wSubHead" />
      </div>
    </div>
  </div>
)


export default SecondaryHeroWSubHead

