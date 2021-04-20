
import colors from '../../styles/colors';
import styled from 'styled-components';

// Styling the Promo component.
const StyleContainer = styled.div`
    font-family: 'Montserrat';
    background-color: ${colors.red};
    color: ${colors.silver};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 200px;
    text-align: center;

    div {
        margin: 10px;
    }

    div:nth-of-type(1) {
        font-size: 1.6em;
    }

    img:nth-of-type(1) {
        position: absolute;
        left: 10vw;
    }

    img:nth-of-type(2) {
        position: absolute;
        right: 10vw;
        transform: rotate(180deg);
    }

    // media query to hide the image as the size of screen reaches less than 1000px
    @media only screen and (max-width: 1000px) {
        img {
            display: none;
        }
    }
`

export default StyleContainer;
