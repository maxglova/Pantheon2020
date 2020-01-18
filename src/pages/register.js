import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import heroImage from "../images/register-bg.png"
import innerSubHead from "../images/SVGs/ReserveYourSpot.svg"
import PricingCards from "../components/PricingCards/pricingCards.js"
import SEO from "../components/seo"
import SecondaryHeroWSubHead from "../components/Secondary-Hero-wSubHead/secondary-hero-wSubHead.js"
import RegisterCopyRow from "../components/RegisterCopyRow/RegisterCopyRow.js"

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
