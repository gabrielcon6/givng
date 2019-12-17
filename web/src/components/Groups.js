import React from "react";

import { SERVER_URL } from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import People from "./people";
import { StyledDiv, Title, Budget } from "./StyledGroups";

class Groups extends React.Component {
  state = {
    givngList: []
  };
  componentDidMount() {
    let self = this;

    fetch(SERVER_URL + "/groups.json")
      .then(response => response.json())
      .then(json => {
        self.setState(state => {
          console.log("json :", json);

          return {
            ...state,
            givngList: [...json]
          };
        });
      });
  }
  render() {
    const givngElements = this.state.givngList.map((givngList, index) => {
      return (
        <StyledDiv key={givngList.id}>
          <Title>{givngList.name}</Title>
          <Budget>{givngList.budget}</Budget>
          <a href="#" class="btn btn-outline-info">
            Learn More
          </a>

          <People />
        </StyledDiv>
      );
    });
    return (
      <div>
        <Container>
          <h4>Groups</h4>
          {givngElements}
          <br />
          <button>Add a new group</button>
        </Container>
      </div>
    );
  }
}

export default Groups;
