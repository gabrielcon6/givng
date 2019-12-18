import React { Component } from "react";
import axios from 'axios';
import { SERVER_URL } from "../config";
// import { Container } from "react-bootstrap";
import { StyledContainer } from "../styles/StyledGivngDetailList";

class GivngDetailList extends Component {
  state = {
    givngList: []
  };

  componentDidMount() {
    const givingId = this.props.givngId;
    axios.get(`${SERVER_URL}/givngs/${}.json`).then(res => {
      const myGivng = res.data;
      this.setState({
        givngList: myGivng
      });
    });
  }
  render() {
    console.log(this.props);
    const givngTitle = this.state.givngList.map((givngList, index) => {
      return (
        <div>
          <StyledContainer key={index}>
            <h1>{givngList.theme}</h1>
            <h2>Total Budget: {givngList.budget}</h2>
          </StyledContainer>
        </div>
      );
    });
    return (
      <div>
        {givngTitle}
        Giving Details: {this.props.givngId}
      </div>
    );
  }
}

export default GivngDetailList;
