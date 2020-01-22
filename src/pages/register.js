import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery} from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Image from "../components/image"
import heroImage from "../images/register-bg.png"
import innerSubHead from "../images/SVGs/ReserveYourSpot.svg"
import PricingCards from "../components/PricingCards/pricingCards.js"
import SEO from "../components/seo"
import SecondaryHeroWSubHead from "../components/Secondary-Hero-wSubHead/secondary-hero-wSubHead.js"
import RegisterCopyRow from "../components/RegisterCopyRow/RegisterCopyRow.js"

const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

const Register = () => (
    <Layout>
      <SEO title="Pantheon 2020 | ServiceTitan User Conference" />
        <SecondaryHeroWSubHead 
          bgImg={heroImage}
          HeaderTxt="Early Bird Pricing Ends Soon!"
          innerSubHead={innerSubHead}
        />
        <PricingCards
        />
        <RegisterCopyRow

        />


    

  </Layout>

)

export default Register

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