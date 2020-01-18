import React from "react"
import "./style.scss"

import videoBtn from "../../images/video.png"

const LeftImgRowValueProps = (props) => (
    <div className="container grid-bg">
    <div className="ruler-bg">
      <div className="row left-content-spacer">
        <div className="col-sm-6 desktop-left-img">
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
          <div className="flexbox border-flexbox valueProp-container">
            <div className="border-flex-item">
              <h3>{props.valueHead1}</h3>
              <p>{props.valueSubHead1}</p>
            </div>
            <div className="border-flex-item">
              <h3>38</h3>
              <p>Speakers</p>
            </div>
            <div className="border-flex-item">
              <h3>1,200+</h3>
              <p>Attendees</p>
            </div>
            <div className="border-flex-item l-img-details-btn-container">
              <a href="/pantheon/about" className="outlined-btn l-img-details-btn align-middle">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 left-content-spacer mobile-left-img">
          <img className="col-6-img" src={props.leftImgSrcMobile} alt={props.leftImgAltTxt}/> 
        </div>
      </div>
    </div>
  </div>
)


export default LeftImgRowValueProps

