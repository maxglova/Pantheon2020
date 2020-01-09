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

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

const IndexPage = () => (
    <Layout>
      <SEO title="Pantheon 2020 | ServiceTitan User Conference" />



    

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