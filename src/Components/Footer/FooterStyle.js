import styled from 'styled-components';
import colors from '../../styles/colors';

// Styled component for the heading of the Footer section.
const StyledHeading = styled.div`
    font-family: 'Montserrat';
    text-align: center;
    margin: 40px;
    font-size: 30px;
    font-weight: 700;
`

// Styled component for the image section in the footer.
const StyledContainer = styled.div`
    color: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    font-family: 'Montserrat';
    margin-bottom: 100px;
    
    img {
        width: 200px;
        height: 200px;
    }

    div {
        width: 300px;
    }
`

export {
    StyledContainer,
    StyledHeading
};
