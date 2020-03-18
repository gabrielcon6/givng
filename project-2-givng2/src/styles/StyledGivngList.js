import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
  justify-content: center;
  &::before {
    box-sizing: border-box;
  }
  &::after {
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  padding-top: 10vh;
  font-weight: 200;
  font-size: 2.5rem;
  letter-spacing: 0.8rem;
  text-align: center;
  margin: 1.5vh 0;
`;

export const CardsParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
`;

export const CardsItem = styled.div`
  display: flex;
  list-style-type: none;
  flex: 1;
  padding: 1rem;
  max-width: 25vw;
  justify-content:center;
  margin: 20px;
  &:nth-child() {
    flex: 1 0 21%;
  }
`;

export const MyCard = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  width: 100%;
  text-align: center;
  
  &:hover {
    .CardImage {
      filter: contrast(100%);
    }
  }
`;

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




export const CardContent = styled.div`
  /* display: flex; */
  flex: 1 1 auto;
  /* flex-direction: column; */
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
  align-self: flex-end;
`;

export const BottomContainer = styled.div`
  height: 10vh;
  background-color: white;
`;


export const Input = styled.input`
  border-radius: 0.4rem;
  border: 0.05rem solid grey;
  min-width: 10vw;
  max-width: 20vw;
  min-height: 3.5vh;
  max-height: 5vh;
  margin: 0.5rem;
  text-align: center;
`; 

export const Select = styled.select`
  border-radius: 0.4rem;
  border: 0.05rem solid grey;
  min-width: 10vw;
  max-width: 20vw;
  min-height: 3.5vh;
  max-height: 5vh;
  margin: 0.5rem;
  text-align: center;
`;

export const BottomButtons = styled.button`
  box-sizing: border-box;
  border-width: 0.05rem;
  border-style: solid;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
  background: ${props => props.primary ? "white" : "rgb(0, 4, 7)"};
  /* background: rgb(0, 4, 7); */
  border-color: transparent;
  /* border-color: transparent; */
  color: ${props => props.primary ? "black" : "#fff"};
  /* color: #fff; */
  cursor: pointer;
  min-width: 7vw;
  max-width: 15vw;
  min-height: 3.5vh;
  max-height: 5vh;
  letter-spacing: 0.3rem;
  margin-top: 1vh;

  &:hover {
  background: white;
  color: ${props => props.delete ? "red" : "black"};
  border: ${props => props.delete ? "0.05rem red solid" : "0.05rem black solid"};
  &:focus {
    border-color: #2B2D42;
  }
 }
`;

  
export const MiddleContainer = styled.div`
    background-color: #DFE3E8;
    text-align: center;
    font-family: inherit;
    letter-spacing: 0.2rem;

    `;
