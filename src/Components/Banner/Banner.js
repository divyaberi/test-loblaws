import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import StyleContainer from './BannerStyle';
import { Button } from 'react-bootstrap';
import middle from '../../Images/middle.png';
import { FaAngleRight } from 'react-icons/fa';


// Banner Component.
const Banner = () => {
    return (
        <StyleContainer>
            <div className='banner-content'>
                <div className='banner-content-heading'>
                    Online grocery pickup or <br />
                    delivery. <br />
                    We do both.
                </div>
                <div className='banner-content-button'>
                    <Button variant="danger" size="lg" className='banner-content-button-pickup'>
                        <span> Shop Pickup</span>
                        <FaAngleRight />
                    </Button>
                    <Button variant="danger" size="lg" className='banner-content-button-delivery'>
                        <span>Shop Delivery</span>
                        <FaAngleRight />
                    </Button>
                </div>
            </div>
            <div className='banner-content-image'>
                <img src={middle} alt="img" />
            </div>
        </StyleContainer>
    )
}


export default Banner;
