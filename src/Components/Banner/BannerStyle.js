import styled from 'styled-components';
import colors from '../../styles/colors';

const StyleContainer = styled.div`
    // basic styling.
    font-family: 'Montserrat';
    background-color: ${colors.silver};
    color: ${colors.black};
    font-weight: 700;
    font-size: 38px;

    // button styling.
    button {
        margin: 15px 15px 0px 0px;
        padding: 10px 10px 10px 40px;
        background-color: ${colors.red};
        span {
            font-size: 16px;
        }
        svg {
            margin-left: 30px;
        }
    }

    // image styles.
    img {
        max-width: 100%;
        height: 400px;
        object-fit: cover;
    }

    // setting the flex container for the banner.
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    // setting width to 50% each.
    .banner-content, .banner-content-image {
        width: 50%
    }

    .banner-content {
        padding-left: 25.0%;
    }

    // media query for setting padding left to 7.5% when the width is less than 1500px.
    @media only screen and (max-width: 2100px) {
        .banner-content {
            padding-left: 15.0%;
        }
    }

    // media query for setting padding left to 7.5% when the width is less than 1500px.
    @media only screen and (max-width: 1500px) {
        .banner-content {
            padding-left: 7.5%;
        }
    }

    // media queries when the width is less than 1200px.
    @media only screen and (max-width: 1200px) {
        font-size: 26px;

        button {
            margin: 10px 10px 0px 0px;
            padding: 5px 5px 5px 20px;
            background-color: ${colors.red};
            span {
                font-size: 14px;
            }
            svg {
                margin-left: 10px;
            }
        }
    }

    // media queries when the width is less than 900px.
    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
        margin: 0px;
        padding: 0px;

        .banner-content, .banner-content-image {
            width: 100%
        }

        img {
            min-width: 100%;
        }

        .banner-content {
            text-align: center;
            margin: 30px 0px 30px 0px;
        }
    }
`

export default StyleContainer;