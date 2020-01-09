import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Image from "../components/image"
import heroImage from "../images/pantheonHeroGraphic.png"
import SEO from "../components/seo"
import Countdown from "../components/HomeHero/countdown"
import regArrow from "../images/btn-arrow-right.png"
import ellenRoar from "../images/ellenRoar.svg"
import sessionAttendee from "../images/sessionAttendeeImg.png"
import videoBtn from "../images/video.png"
import HomeHero from "../components/HomeHero/HomeHero.js"
import LeftImgRowValueProps from "../components/L-Img-Row-ValueProps/content-row.js"
import RightImgRow from "../components/R-Img-Row/content-row.js"
import Carousel from "../components/Carousel/carousel.js"

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

const IndexPage = () => (
    <Layout>
      <SEO title="Pantheon 2020 | ServiceTitan User Conference" />
      <HomeHero />
      <LeftImgRowValueProps 
        leftImgSrc={ellenRoar} 
        leftImgAltTxt="Ellen Roar Speaking at Pantheon 2019"
        categoryLabel="Speakers"
        sectionHeadingLine1="Become the Architect"
        sectionHeadingLine2="of Your Business."
        sectionBodyCopy="Pantheon is where leaders in the trades come together to break ground in an industry that has long been underserved by technology. Discover the unprecedented power of ServiceTitan training sessions, network with industry peers from across the country, and learn how to be the architect of your own business from industry giants."
        VideoBtnLabel="Watch 2019 Recap"
        valueHead1="126+"
        valueSubHead1="Sessions"
        valueHead2="38"
        valueSubHead2="Speakers"
        valueHead3="1,200"
        valueSubHead3="Attendees"
        ctnBtnLnk1=""
        ctnBtnLbl="Learn More"
        />
      <RightImgRow 
        categoryLabel="Training"
        sectionHeadingLine1="Build the Blueprint"
        sectionHeadingLine2="for Your Future."
        sectionBodyCopy="Whether you’ve yet to adopt ServiceTitan or are a Titan veteran, our training sessions give you step-by-step tools to break through the barrier between good and extraordinary. Pantheon’s specialized training tracks offer practical solutions, so any member of your team can contribute to your company’s success and growth."
        secondaryHead="See Sessions On"
        sectionBodyCopy2="Whether you’ve yet to adopt ServiceTitan or are a Titan veteran, our training sessions give you step-by-step tools to break through the barrier between good and extraordinary. Pantheon’s specialized training tracks offer practical solutions, so any member of your team can contribute to your company’s success and growth."
        sessionList1="Turning on your iPad 101"
        sessionList2="Importing your Profile Picture"
        sessionList3="Calling people with a headset"
        sessionList4="Using you Ipad as a Frisbee"
        sessionList5="Zig-Zaging through Traffic"
        sessionList6="Turning on your iPad 101"
        rightImgSrc={sessionAttendee}
        rightImgAltTxt="Pantheon 2019 Attendee during a training session"
        />
        <Carousel />
      


    

  </Layout>

)

export default IndexPage

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`