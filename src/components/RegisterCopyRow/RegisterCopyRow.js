import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"
import HeaderSpacer from "../HeaderSpacer/headerSpacer.js"
import blueArrow from "../../images/blue-arrow.png"
import wbLogo from "../../images/wb-logo-blk.png"
import Image from 'react-bootstrap/Image'



const RegisterCopyRow = (props) => (
  <div className="RegisterCopyWrapper container-fluid cross-grid-bg bg ">
    <div class="container">
      <div className="row half-content-spacer bottom-full-spacer">
        <div className="col-sm-6">
          <h2 className="bold-lower-head">Reserve your Early Bird Ticket Before February 2nd!</h2>
          <p className="bodyTxt-noBorder">Secure your all-access pass to the industry’s most anticipated event of the year. This year, we're offering three premium registration packages designed for you and your team to get maximum value out of this year's event.</p>
          <a className="textLink-wArrow textLink-wArrow-Reg1" href="#">Manage Sessions <img src={blueArrow} /></a>
        </div>
        <div className="col-sm-6 bordered-content">
          <h5 className="bold-upper-head">SOCIAL ONLY TICKETS MAX 2 TICKETS PER GUEST</h5>
          <div className="row wbRowAdjust">
            <div className="col-4 wb-img-container">
              <Image fluid src={wbLogo} alt="Warner Bros Logo" className="warnerBrosImg"/>
              <br />
            </div>
          <div className="col-8 wbDetailsTxt">
            <p className="boldedSocialText">This ticket is perfect for guests of attendees* who don’t want to miss out on our epic evening parties on August 13th and 14th only.</p>
            <p className="wbBody">Please note: it does not include day-time meals, training, networking, or keynote sessions.</p>
            <p className="wbDisclaimer">*Must be a guest of a full conference attendee.</p>
            <a className="textLink-wArrow" href="#">Manage Sessions <img src={blueArrow} /></a>
          </div>
        </div>
        </div>
      </div>
    </div>

  
  </div>
)


export default RegisterCopyRow

