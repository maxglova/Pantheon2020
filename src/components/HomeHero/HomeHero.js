import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import regArrow from "../../images/btn-arrow-right.png"
import heroImage from "../../images/pantheonHeroGraphic.png"
import Countdown from "./countdown"

import "./HomeHero.scss"

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();


const HomeHero = () => (
        <div className="container-fluid heroWrapper">
            <div className="heroContainer">
                <img src={heroImage} className="heroGraphic" />
                <div className="details-container-spacer"></div>
            </div>
            <div className="detailsWrapper">
                    <div className="detailsContainer">
                    <h2 className="headingText">ServiceTitan<br/>User Conference</h2>
                    </div>
                    <div className="detailsContainer">
                    <Countdown date={`${year}-10-13T00:00:00`} />
                    </div>
                    <div className="detailsContainer">
                    <p>August 13 & 14</p>
                    <p>Pasadean, CA.</p>
                    <div className="reg-btn-spacer"></div>
                        <div className="details-reg-btn-container">
                        <a href="/registration" className="reg-btn details-reg-btn">Register Now</a>
                        <img className="details-reg-arrow" src={regArrow} alt="register arrow" />
                        </div>
                    <div className="reg-btn-spacer"></div>
                    </div>
                </div>
                <div className="details-container-bottom-spacer"></div>
        </div>
)


export default HomeHero

