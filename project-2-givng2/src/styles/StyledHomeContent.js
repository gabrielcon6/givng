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
    background-color: ${props => props.background || "white"};
    text-align: center;
    display: table;
    padding: 4vh 0;
    color: ${props => props.colorPrimary ? "#2B2D42" : "black"};
`;

export const H1 = styled.h1`
    font-weight: "400";
    @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const InnerContainer = styled.div`
    text-align: left;
    display: inline-block;
    vertical-align: middle;
    margin: 6vh 0;
`;

export const Title = styled.div`
    color: ${props => props.primary ? "white" : "black"};
    font-weight: 200;
    font-size: 3rem;
    letter-spacing: 0.35rem;
    display: table-cell; 
    vertical-align: middle; 
    text-align: middle; 
    @media (max-height: 750px) {
    padding-left: 10vw;
  }
    @media (max-width: 450px) {
    text-shadow: 2px 2px 5px black;
  }
`;

export const Text = styled.div`
    color: ${props => props.color};
    font-weight: ${props => props.primary ? "400" : "200"};
    font-size: 2rem;
    letter-spacing: 1px;
    display: table-cell; 
    vertical-align: middle;
    @media (max-width: 450px) {
    font-size: 1rem;
    line-height: 5vh;
    text-align: center;
    }
`;

export const Image = styled.img`
    height: 60vh;
    width: 100vw;
`;

export const Footer = styled.div`
    background-color: #2B2D42;
    vertical-align: middle;
`;

export const Icon = styled.div`
    background-color: ${props => props.backPrimary ? "#2B2D42" : "white"};
    width: 2.5vw;
    height: 5vh;
    color: ${props => props.colorPrimary ? "white" : "black"};
    border-radius: 50%;
    display: inline-block;    
    margin-right: 1vw;
    text-align: center;
    &:hover {
        color: white;
    }
    @media (max-height: 750px) {
    /* padding-left: 10vw; */
    height: 6vh;
    width: 3vw;
  }
    @media (max-width: 450px) {
    width: 12vw;
    height: 6vh;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: ${props => props.backPrimary ? "white" : "#DFE3E8"};
    color: black;
        }
`;

export const IconText = styled.div`
    display: inline-block;    
`;

export const FooterText = styled.p`
    color: white;
    padding: 0 0 1vh;
    @media (max-width: 450px) {
    font-size: 0.8rem;
        }
`;