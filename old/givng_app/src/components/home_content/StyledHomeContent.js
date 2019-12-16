import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: black;
`;

export const Banner = styled.div`
    background-image: url("gift_banner.jpg");
    background-size: cover;
    height: 60vh;
    width: 100vw;
    justify-content: center;
    vertical-align: middle;
    display: table;
    `;

export const WrappedContainer = styled.div`
    height: 30vh;
    width: 100vw;
    background-color: ${props => props.background};
    /* vertical-align: middle; */
    text-align: center;
    display: table;
    padding: 4vh 0;

`;

export const InnerContainer = styled.div`
    text-align: left;
    display: inline-block;
    vertical-align: middle;
    margin: 6vh 0;
`;

export const Title = styled.div`
    color: ${props => props.color};
    font-weight: 200;
    font-size: 3rem;
    letter-spacing: 2px;
    display: table-cell; 
    vertical-align: middle; 
    text-align: center; 
`;

export const Text = styled.div`
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    font-size: 2rem;
    letter-spacing: 1px;
    display: table-cell; 
    vertical-align: middle;
`;

export const Image = styled.img`
    height: 60vh;
    width: 100vw;
`;

// export const ButtonLogin = styled.button`
//     margin-top: 3vh;
//     background:transparent;
//     color:#5DBCD2;
//     border:none;
//     padding:10px 30px;
//     border-radius:20px;
//     box-shadow:0 0 0 1px #5DBCD2 inset;
//     outline:none;
//     font-weight:normal;
//     -webkit-transition:all 200ms ease-out;
//     &:hover {
//     box-shadow:0 0 0 3px #5DBCD2 inset;
//     -webkit-transition:none;
//     }
//     &:active {
//     color:#EEE;
//     background: #5DBCD2;
//   }
// `



// export const BottomContainer = styled.div`
//     height: 30vh;
//   background-color: #DFE3E8;
//   /* justify-content: center; */
//     /* display: flex; */
//     vertical-align: middle;
// `
export const Footer = styled.div`
    background-color: #2B2D42;
    vertical-align: middle;
`;

export const Icon = styled.div`
    background-color: ${props => props.background};
    width: 2.5vw;
    height: 5vh;
    color: ${props => props.color};
    border-radius: 50%;
    display: inline-block;    
    margin-right: 1vw;
    text-align: center;
`;

export const IconText = styled.div`
    display: inline-block;    
`;