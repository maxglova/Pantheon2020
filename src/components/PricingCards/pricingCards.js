import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"

import basicWrench from "../../images/basicWrench.png"
import vipWrench from "../../images/vipWrench.png"
import groupWrench from "../../images/groupWrench.png"

const blueText = {
  color: '#00a9f7'
};


const PricingCards = (props) => (
  <div className="cardWrapper container-fluid cross-grid-bg bg">
    <div className="container">
      <div className="ruler-bg">
        <div className="row content-spacer">
          <div className="col-sm-4 pricingCard">
            <div className="top-accent-banner orange-banner">
              <p className="pricingBannerTxt"><b>EARLY BIRD:</b> Register before 02/02 and save $200! </p>
            </div>
            <div className="mainPriceContainer">
              <h2 className="ticketName bold-upper-head">All Access</h2>
              <div className="pricingContainer">
                <div className="slashedPriceContainer">
                  <h2 className="ticketPrice bold-upper-head strikethrough"> $999</h2>
                  
                  <p className="ticketQuantity">Per Ticket</p>
                </div>
                <div className="CurrentPriceContainer">
                <h2 className="ticketPrice bold-upper-head">$999</h2>
                <p className="ticketQuantity">Per Ticket</p>
              </div>
            </div>
            </div>
            <div className="ticketDetailsContainer">
              <p className="ticketDetailsBoldTxt">This ticket gives you an all-access pass to:</p>
              <br />
              <div className="row">
                <div className="col-sm-8">
                  <ul className="ticketList">
                    <li className="ticketDetailsList">All Training Sessions</li>
                    <li className="ticketDetailsList">Networking opportunities </li>
                    <li className="ticketDetailsList">Keynote Presentations</li>
                    <li className="ticketDetailsList">Exhibits</li>
                    <li className="ticketDetailsList">Catered Meals</li>
                    <li className="ticketDetailsList">Exclusive Parties</li>
                    <li className="ticketDetailsList inactive">Bonus Merch</li>
                    <li className="ticketDetailsList inactive">VIP Lounge access at both evening parties</li>
                    <li className="ticketDetailsList inactive">One complimentary Social-Only ticket for a guest</li>
                  </ul>
                </div>
                <div className="col-sm-4 wrenchGraphic">
                  <img src={basicWrench} alt="Wrench Graphic" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 pricingCard">
            <div className="top-accent-banner blue-banner">
              <p className="pricingBannerTxt"><b>EARLY BIRD:</b> Register before 02/02 and save $200! </p>
            </div>
            <div className="mainPriceContainer vipContainer">
              <h2 className="ticketName bold-upper-head">All Access</h2>
              <div className="pricingContainer">
                <div className="CurrentPriceContainer">
                <h2 className="ticketPrice bold-upper-head">$1299</h2>
                <p className="ticketQuantity">Per Ticket</p>
              </div>
            </div>
            </div>
            <div className="ticketDetailsContainer vipContainer">
              <p className="ticketDetailsBoldTxt">This ticket gives you an all-access pass to:</p>
              <br />
              <div className="row">
                <div className="col-sm-8">
                  <ul className="ticketList">
                    <li className="ticketDetailsList">All Training Sessions</li>
                    <li className="ticketDetailsList">Networking opportunities </li>
                    <li className="ticketDetailsList">Keynote Presentations</li>
                    <li className="ticketDetailsList">Exhibits</li>
                    <li className="ticketDetailsList">Catered Meals</li>
                    <li className="ticketDetailsList">Exclusive Parties</li>
                    <li className="ticketDetailsList">Bonus Merch</li>
                    <li className="ticketDetailsList">VIP Lounge access at both evening parties</li>
                    <li className="ticketDetailsList">One complimentary Social-Only ticket for a guest</li>
                  </ul>
                </div>
                <div className="col-4 wrenchGraphic vipWrench">
                  <img src={vipWrench} alt="Wrench Graphic" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 pricingCard">
            <div className="top-accent-banner orange-banner">
              <p className="pricingBannerTxt"><b>EARLY BIRD:</b> Save $400 when you bundle!</p>
            </div>
            <div className="mainPriceContainer">
              <h2 className="ticketName bold-upper-head">Group All Access</h2>
              <div className="pricingContainer">
                <div className="slashedPriceContainer">
                  <h2 className="ticketPrice bold-upper-head strikethrough"> $2799</h2>
                  
                  <p className="ticketQuantity">4 Tickets</p>
                </div>
                <div className="CurrentPriceContainer">
                <h2 className="ticketPrice bold-upper-head">$999</h2>
                <p className="ticketQuantity">Per Ticket</p>
              </div>
            </div>
            </div>
            <div className="ticketDetailsContainer">
              <p className="ticketDetailsBoldTxt">This ticket package gives your group of <span style={blueText}>FOUR</span> an all-access pass to:</p>
              <div className="row">
                <div className="col-sm-8">
                  <ul className="ticketList">
                    <li className="ticketDetailsList">All Training Sessions</li>
                    <li className="ticketDetailsList">Networking opportunities </li>
                    <li className="ticketDetailsList">Keynote Presentations</li>
                    <li className="ticketDetailsList">Exhibits</li>
                    <li className="ticketDetailsList">Catered Meals</li>
                    <li className="ticketDetailsList">Exclusive Parties</li>
                    <li className="ticketDetailsList inactive">Bonus Merch</li>
                    <li className="ticketDetailsList inactive">VIP Lounge access at both evening parties</li>
                    <li className="ticketDetailsList inactive">One complimentary Social-Only ticket for a guest</li>
                  </ul>
                </div>
                <div className="col-4 wrenchGraphic groupWrench">
                  <img src={groupWrench} alt="Wrench Graphic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default PricingCards

