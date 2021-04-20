import React from 'react';
import sprinkles from '../../Images/sprinkles.svg';
import StyleContainer from './PromoStyle';

// Component for the Promo section.
const Promo = () => {
    return (
        <StyleContainer className="promo-container">
            <img src={sprinkles} alt="" />
            <div className="promo-container-points">
                <b>
                    Get 20,000 PC Optimum
                    <sup>TM </sup>
                    points
                </b>
            </div>
            <div className="promo-container-order">
                on your first PC Express online grocery order of $75 or more.
                <sup> * </sup>
                That's $20 in points!
            </div>
            <div className="promo-container-checkout">
                Use code
                <b> 20PTS75 </b>
                at checkout.
            </div>
            <img src={sprinkles} alt="" />
        </StyleContainer >
    )
};

export default Promo;
