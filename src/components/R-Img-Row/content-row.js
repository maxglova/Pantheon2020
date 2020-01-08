import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.scss"

const RightImgRow = (props) => (
  <div className="container grid-bg">
    <div className="row content-spacer">
      <div className="col-sm-6 details-top-spacer">
        <div className="category-label headingText">{props.categoryLabel}</div>
        <div className="content-container">
          <h3 className="secondaryHead">{props.sectionHeadingLine1}</h3>
          <h3 className="secondaryHead">{props.sectionHeadingLine2}</h3>
          <p>{props.sectionBodyCopy}</p>
        </div>
        <div className="content-container">
          <div className="subHead">{props.secondaryHead}</div>
            <div className="row sessionsList">
              <div className="col-sm-6">
              <ul>
                <li>{props.sessionList1}</li>
                <li>{props.sessionList2}</li>
                <li>{props.sessionList3}</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="secondSessionList">
                <li>{props.sessionList4}</li>
                <li>{props.sessionList5}</li>
                <li>{props.sessionList6}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <img className="col-6-img" src={props.leftImgSrc} alt={props.leftImgAltTxt}/> 
      </div>
    </div>
  </div>
)


export default RightImgRow

