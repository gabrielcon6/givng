import React, { Component } from "react";
import axios from 'axios';
import { StyledContainer } from "../styles/StyledGivngDetailList";
import "bootstrap/dist/css/bootstrap.min.css";
import EditGivng from "./EditGivng";


class GivngDetailList extends Component {
  state = {
    givngList: []
  };

  componentDidMount() {
    const givingId = this.props.givngId;
    axios.get(`/givngs/${givingId}.json`).then(res => {
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
          <EditGivng />
          <StyledContainer key={index}>
            <h2>Total Budget: {givngList.budget}</h2>
          </StyledContainer>
        </div>
      );
    });
    return (
      <div>
        {givngTitle}
        Giving Details: {this.props.givngId} 0
      </div>
    );
  }
}

export default GivngDetailList;
