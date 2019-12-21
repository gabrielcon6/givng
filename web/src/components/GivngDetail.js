import React from "react";
import { StyledContainer, Title, H2, H3 } from "../styles/StyledGivngDetailList";
import { CardImage } from "../styles/StyledGivngList.js"

class GivngDetail extends React.Component {


  render() {
    console.log(this.props);
    const givng = this.props.givng;
    return (
      <>
      <CardImage className={`${givng.theme}`} style={{height: "50vh"}}></CardImage>

      <StyledContainer>
        <Title style={{marginTop: "-6vh"}}>{givng.name}</Title>
        <H2>Total Budget: $ {givng.budget}0</H2>
        <H3>Your groups:</H3>
      </StyledContainer>
      
      </>
    );
  }
}

export default GivngDetail;
