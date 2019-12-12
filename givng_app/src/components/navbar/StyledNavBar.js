import styled from 'styled-components';

export const StyledNav = styled.nav`
background-color: rgb(250, 195, 42);
width: 100vw;
float: right;
height: 7vh;
`;

export const StyledNavLinks = styled.p`
color: #616161;
float: right;
margin: 0 1vw;
padding: 1rem;
cursor: pointer;
text-decoration: none;
&:hover {
    background-color: #603e94;
    color: white;
    font-size: 1.1rem;
}
`;

export const LogoImg = styled.img`
padding: 0;
margin-top: -10vh;
margin-left: -1vw;
width: 20vw;
height: 35vh;
position: absolute;
cursor: pointer;
`