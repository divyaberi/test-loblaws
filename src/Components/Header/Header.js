import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import express from '../../Images/express.svg';
import StyleContainer from './HeaderStyle';

// component is used to set the header of the landing page.
class Header extends React.Component {
    render() {
        return (
            <StyleContainer className="header-container">
                <div className="logo-container">
                    <img src={express} alt="express" />
                </div>
                <div className="heading-container">
                    <span> Pickup </span>
                    <span> Delivery </span>
                </div>
            </StyleContainer>
        )
    }
}


export default Header;
