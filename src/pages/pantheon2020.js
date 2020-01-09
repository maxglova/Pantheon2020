import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css'
import Image from "../components/image"
import SEO from "../components/seo"
import regArrow from "../images/btn-arrow-right.png"
import videoBtn from "../images/video.png"
import SplashHeader from "../components/Splash-Header/splashHeader.js"
import "../components/global.scss"

const SplashPage = () => (
    <div className="container">
      <SEO title="Pantheon 2020 | ServiceTitan User Conference" />
      <SplashHeader />
      

    </div>


    


)

export default SplashPage

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