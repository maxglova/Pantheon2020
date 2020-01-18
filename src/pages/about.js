import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import heroImage from "../images/about-bg.png"
import SEO from "../components/seo"
import SecondaryHero from "../components/Secondary-Hero/secondary-hero.js"
import AboutCopyRow from "../components/AboutCopyRow/AboutCopyRow.js"
import Carousel from "../components/Carousel/carousel.js"

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

