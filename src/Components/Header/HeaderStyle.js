import styled from 'styled-components';
import colors from '../../styles/colors';

// This is a style container for the Header component.
const StyleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    height: 80px;
    color: ${colors.black};
    margin-left: 80px;
    margin-right: 50px;

    span {
        font-size: 18px;
        font-weight: 600;
        margin-left: 40px;
    }

    img {
        width: 156px;
        height: 35px;
    }
`

export default StyleContainer;
