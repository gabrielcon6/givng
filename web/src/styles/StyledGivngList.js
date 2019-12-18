import styled from "styled-components";
// import { Link } from "@reach/router";


export const MyButton = styled.button`
  background-color: white;
  border: 0.04rem solid #cccccc;
  border-radius: 1rem;
  color: #696969;
  padding: 0.5rem;
  text-transform: lowercase;
  text-decoration: none;
  display: block;
  width: 100%;
`;

export const StyledCards = styled.ul`
  /* display: flex; */
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  /* width: 40vw; */
  &::before {
    box-sizing: border-box;
  }
  &::after {
    box-sizing: border-box;
  }
`;

export const CardsItem = styled.li`
  display: flex;
  padding: 1rem;
  /* @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  } */
`;

export const MyCard = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 20vw;
  max-width: 35vw;
  &:hover {
    .CardImage {
      filter: contrast(100%);
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  min-width: 15vw;
  min-height: 10vw;
`;


export const CardImage = styled.div`
  height: 30vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  /* filter: saturate(180%); */
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(.43,.41,.22,.91);;
  &::before {
    content: "";
      display: block;
    padding-top: 56.25%; 
  }
  @media(min-width: 40rem) {
    &::before {
      padding-top: 66.6%; 
    }
  }
`;


export const CardTitle = styled.div`
  color: #696969;
  font-size: 1.4rem;
  font-weight: 200;
  letter-spacing: 0.4rem;
  margin-bottom: 1.5vh;
  text-transform: uppercase;
  padding: 1vh;
`;

export const CardText = styled.p`
  flex: 1 1 auto;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  color: #999999;
`;

export const BottomContainer = styled.div`
  height: 20vh;
  background-color: grey;
`;

export const Title = styled.h1`
    font-weight: 200;
    font-size: 2.5rem;
    letter-spacing: 0.8rem;
    text-align: center;
    margin: 1.5vh 0;
`;