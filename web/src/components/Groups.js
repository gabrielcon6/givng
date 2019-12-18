import React from "react";

import { SERVER_URL } from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "react-bootstrap";
import People from "./People";
import { StyledDiv, Title, Budget } from "./StyledGroups";

class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      givngList: [],
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
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
        <Jumbotron>
          <StyledDiv key={index}>
            <Title>{givngList.name}</Title>
            <Budget>{givngList.budget}</Budget>
            <button
              class="btn btn-outline-info"
              onClick={this.toggleHidden.bind(this)}
            >
              Learn More
            </button>
            {!this.state.isHidden && <People />}
          </StyledDiv>
        </Jumbotron>
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
