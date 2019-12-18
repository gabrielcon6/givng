import React from "react";
import { StyledContainer } from "../styles/StyledGivngDetailList";

class GivngDetail extends React.Component {


  render() {
    console.log(this.props);
    const givng = this.props.givng;
    return (
      <StyledContainer>
        <h1>{givng.theme}</h1>
        <h2>Total Budget: {givng.budget}</h2>
      </StyledContainer>
    );
  }
}

export default GivngDetail;
