import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import torchCarousel from '../../images/Carousel-Imgs/carousel-torch.png'
import speakersCarousel from '../../images/Carousel-Imgs/carousel-speakers.png'
import partyCarousel from '../../images/Carousel-Imgs/carousel-party.png'
import trainingCarousel from '../../images/Carousel-Imgs/carousel-training.png'
import networkingCarousel from '../../images/Carousel-Imgs/carousel-networking.png'
import topBracket from '../../images/caption-top-border.png'
import bottomBracket from '../../images/caption-bottom-border.png'
import "../global.scss"
import "./carousel.scss"



const CarouselComponent = ({ siteTitle }) => (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={networkingCarousel}
            alt="First slide"
            />
            <Carousel.Caption>
            <img className="caption-top-bracket" src={topBracket} alt="quote border top bracket"/>
            <p className="firstQuote">"<span className="secondQuote">"</span></p>
            <p className="quote">Honestly, it's the networking opportunities. It's getting to know the other Titans at Pantheon and learning how they use the software. That’s what I get most excited about.”</p>
            <p className="quoteeName">Stephanie Hornbeck, Accounting Supervisor for Earl’s Plumbing</p>
            <img className="caption-bottom-bracket" src={bottomBracket} alt="Quote border bottom bracket"/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={torchCarousel}
            alt="Torch Network"
            />

            <Carousel.Caption>
            <img className="caption-top-bracket" src={topBracket} alt="quote border top bracket"/>
            <p className="firstQuote">"<span className="secondQuote">"</span></p>
            <p className="quote">I can't say enough about ServiceTitan. That's why I'm a Torch member. It's great software—plus the team and their customer service has been fantastic!”</p>
            <p className="quoteeName">Dave Smith, Owner of World Home Services</p>
            <img className="caption-top-bracket" src={bottomBracket} alt="Quote border bottom bracket"/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={trainingCarousel}
            alt="Pantheon Training"
            />

            <Carousel.Caption>
            <img className="caption-top-bracket" src={topBracket} alt="quote border top bracket"/>
            <p className="firstQuote">"<span className="secondQuote">"</span></p>
            <p className="quote">I feel like in all the sessions I got little nuggets that I could take back and dive in deeper with with my Success Manager or just on my own.” </p>
            <p className="quoteeName">Janelle, Manager at High Air Conditioning Electrical Service</p>
            <img className="caption-bottom-bracket" src={bottomBracket} alt="Quote border bottom bracket"/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={speakersCarousel}
            alt="Keynote Speakers"
            />

            <Carousel.Caption>
            <img className="caption-top-bracket" src={topBracket} alt="quote border top bracket"/>
            <p className="firstQuote">"<span className="secondQuote">"</span></p>
            <p className="quote">There is a lot of good things that we learn from the speakers. They're very polished and I love how it was presented.”</p>
            <p className="quoteeName">Sheron Cresson, Finance Manager at Blackhawk Heating</p>
            <img className="caption-bottom-bracket" src={bottomBracket} alt="Quote border bottom bracket"/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={partyCarousel}
            alt="Pantheon after party"
            />

            <Carousel.Caption>
            <img className="caption-top-bracket" src={topBracket} alt="quote border top bracket"/>
            <p className="firstQuote">"<span className="secondQuote">"</span></p>
            <p className="quote long-quote-mobile">I’ve been able to network with other contractors who have gone through what I'm currently going through or vice versa. Like I'm able to help another contractor that's going through something that I’ve been able to accomplish and have already gotten over that hurdle.”</p>
            <p className="quoteeName">McKay, Office Manager at Friendly Home Services</p>
            <img className="caption-bottom-bracket" src={bottomBracket} alt="quote border top bracket"/>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)


export default CarouselComponent
