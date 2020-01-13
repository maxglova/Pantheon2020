import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"
import blueArrow from "../../images/blue-arrow.png"
import calendarIcon from "../../images/Icons/calendar.png"
import locationIcon from "../../images/Icons/location-pin.png"
import priceIcon from "../../images/Icons/money-currancy.png"
import infoIcon from "../../images/Icons/information.png"
import rightDashedLines from "../../images/Icons/aboutRightDashedLine.png"
import bottomDashedLines from "../../images/Icons/aboutBottomDashedLine.png"


const AboutCopyRow = (props) => (
  <div className="RegisterCopyWrapper container-fluid iso-grid-bg bg">
    <div class="container">
      <div className="row half-content-spacer bottom-full-spacer">
        <div className="col-sm-6 about-non-contained-copy">
          <h2 className="bold-lower-head">Where Industry Titans Gather</h2>
          <p className="bodyTxt-noBorder">In ancient Greece, it was said that all-powerful Titans would assemble at the PANTHEON to make plans to protect mankind. Today, ServiceTitan considers men and women of the home and commercial service industry to be modern day Titans…</p>
          <h4 className="bold-upper-head medium-content-spacer">What’s New at Pantheon 2020?</h4>
          <p className="bodyTxt-noBorder">Last year, we transformed attendees into better leaders and entrepreneurs. In 2020, we’re providing them the instruction and know-how to futureproof their success. Join us for two days of training and insight to plan out the next stage of your business… and the industry at large.</p>
          <a className="textLink-wArrow small-content-spacer" href="#">Manage Sessions <img src={blueArrow} alt="Link Arrow"/></a>
        </div>
        <div className="col-sm-2 noShowMobile"></div>
        <div className="col-sm-4">
          <div className="aboutDetailsWrapper">
            <div className="category-label headingText">General Info</div>
            <div className="aboutDetailsBorderContainer">
              <div className="aboutDetailsContainer">
                <img className="detailsIcon" src={calendarIcon} alt="calendar icon"/>
                <div className="aboutDetailsCopy">
                  <p className="boldedAboutDetailsHead bold-upper-head">Date</p>
                  <p>August 13 & 14, 2020</p>
                </div>
              </div>
              <div className="aboutDetailsContainer">
                <img className="detailsIcon" src={locationIcon} alt="location icon"/>
                <div className="aboutDetailsCopy">
                  <p className="boldedAboutDetailsHead bold-upper-head">Location</p>
                  <p>Pasadena Convention Center</p>
                </div>
              </div>
              <div className="aboutDetailsContainer">
                <img className="detailsIcon priceIconPad" src={priceIcon} alt="location icon"/>
                <div className="aboutDetailsCopy">
                  <p className="boldedAboutDetailsHead bold-upper-head">Price</p>
                  <p>Starting at $999</p>
                </div>
              </div>
              <div className="aboutDetailsContainer">
                <img className="detailsIcon" src={infoIcon} alt="location icon"/>
                <div className="aboutDetailsCopy">
                  <p className="boldedAboutDetailsHead bold-upper-head">Price</p>
                  <p>Starting at $999</p>
                </div>
              </div>
            </div>
          </div>
          <img className="aboutDetailsRightDashedLines" src={rightDashedLines} alt="image-border-graphic"/>
          <img className="aboutDetailsBottomDashedLines" src={bottomDashedLines} alt="image-border-graphic"/>
        </div>
      </div>
    </div>

  
  </div>
)


export default AboutCopyRow

