import React from "react";
import { StyledContainer, Title, H2, H3 } from "../styles/StyledGivngDetailList";
import EditGivng from "./EditGivng"
// import { Title } from "../styles/StyledHomeContent";

class GivngDetail extends React.Component {


  render() {
    console.log(this.props);
    const givng = this.props.givng;
    return (
      <StyledContainer>
        <Title>{givng.name}</Title>
        <H2>Total Budget: {givng.budget}</H2>
        <EditGivng givng={givng.id}/>
        <H3>Your groups:</H3>
      </StyledContainer>
      
    );
  }
}

export default GivngDetail;
