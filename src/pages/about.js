import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Image from "../components/image"
import heroImage from "../images/about-bg.png"
import SEO from "../components/seo"
import regArrow from "../images/btn-arrow-right.png"
import SecondaryHero from "../components/Secondary-Hero/secondary-hero.js"
import AboutCopyRow from "../components/AboutCopyRow/AboutCopyRow.js"
import Carousel from "../components/Carousel/carousel.js"

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

const About = () => (
    <Layout>
      <SEO title="Pantheon 2020 | ServiceTitan User Conference" />
        <SecondaryHero 
          bgImg={heroImage}
          HeaderTxt="About the Conference"
        />
        <AboutCopyRow />
        <Carousel />


    

  </Layout>

)

export default About

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