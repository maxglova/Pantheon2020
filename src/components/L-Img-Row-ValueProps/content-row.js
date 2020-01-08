import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"

import videoBtn from "../../images/video.png"

const LeftImgRowValueProps = (props) => (
    <div className="container grid-bg">
    <div className="ruler-bg">
      <div className="row content-spacer">
        <div className="col-sm-6">
          <img className="col-6-img" src={props.leftImgSrc} alt={props.leftImgAltTxt}/> 
        </div>
        <div className="col-sm-6 details-top-spacer">
          <div className="category-label headingText">{props.categoryLabel}</div>
          <div className="content-container">
            <h3 className="secondaryHead">{props.sectionHeadingLine1}</h3>
            <h3 className="secondaryHead">{props.sectionHeadingLine2}</h3>
            <p>{props.sectionBodyCopy}</p>
            <div className="videoBtn-container">
              <img className="videoBtn" alt="Video Player Button" src={videoBtn}/>
              <p className="VideoBtnLabel">{props.VideoBtnLabel}</p>
            </div>
          </div>
          <div className="flexbox valueProp-container">
            <div className="flex-item">
              <h3>{props.valueHead1}</h3>
              <p>{props.valueSubHead1}</p>
            </div>
            <div className="flex-item">
              <h3>38</h3>
              <p>Speakers</p>
            </div>
            <div className="flex-item">
              <h3>1,200+</h3>
              <p>Attendees</p>
            </div>
            <div className="btn-container">
              <a href="" className="outlined-btn align-middle">
                <p>Learn More</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default LeftImgRowValueProps

