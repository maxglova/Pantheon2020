import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery} from "gatsby"

import Header from "../components/Pantheon/Header/header.js"
import HomeHero from "../components/Pantheon/HomeHero/HomeHero.js"
import panetheonWrapper from "../components/Pantheon/layout.js"

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

const IndexPage = () => (
    <panetheonWrapper>
      <Header />
      <HomeHero />
      


    

  </panetheonWrapper>

)

export default IndexPage

