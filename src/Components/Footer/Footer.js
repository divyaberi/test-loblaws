import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledHeading, StyledContainer } from './FooterStyle';
import skateboard from '../../Images/skateboard.svg';
import basket from '../../Images/freshness-guaranteed.svg';
import flyer from '../../Images/flyer.svg';
import optimum from '../../Images/pco-pinksparks.svg';

// Array of data for the image section in the footer.
const data = [
    {
        title: 'So many ways to shop',
        text: 'Pick up or delivery? Same day or later this week? Your shop is our command. ',
        img: skateboard,
    },
    {
        title: 'Perfectly picked. Guaranteed',
        text: 'Your grocereries are always picked up the people who knows them best. Freshness guaranteed.',
        img: basket,
    },
    {
        title: 'In-store prices and promos',
        text: 'Never pay more than in-store and get all your local Flyers and deals.',
        img: flyer,
    },
    {
        title: 'Get to the points',
        text: 'Get the PC optimum points you love and extra benefits with a PC Optium insiders annual subscription.',
        img: optimum,
    }
]

// Heading variable for the section.
const heading = 'The stores, brands and the points you love!';


// Footer component in the landing page.
const Footer = () => {
    return (
        <>
            <StyledHeading className="footer-heading-container">
                <div className="footer-heading">{heading}</div>
            </StyledHeading>
            <StyledContainer className="image-container">
                {
                    data.map((item) => {
                        return (
                            <div className="brand-image">
                                <div><img src={item.img} alt="image" /></div>
                                <div><b>{item.title}</b></div>
                                <div>{item.text}</div>
                            </div>
                        )
                    })
                }
            </StyledContainer>
        </>
    )
}


export default Footer;
