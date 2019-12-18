import React from "react";

import axios from "axios";
import { SERVER_URL } from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "react-bootstrap";
import People from "./People";
import { StyledDiv, Title, Budget } from "./StyledGroups";

class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      groupList: [],
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
            groupList: [...json]
          };
        });
      });
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    const groupPost = {
      group: {
        name: this.state.name,
        budget: this.state.budget,
        givng_id: 6,
        date: this.state.date
      }
    };
    console.log(groupPost);
    axios
      .post(`${SERVER_URL}/groups.json`, groupPost)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const groupElements = this.state.groupList.map((groupList, index) => {
      return (
        // <Jumbotron>
          <StyledDiv key={index}>
            <Title>{groupList.name}</Title>
            <Budget>{groupList.budget}</Budget>
            <button className="btn btn-outline-info" onClick={this.toggleHidden.bind(this)}> Learn More </button>
            {!this.state.isHidden && <People />}
          </StyledDiv>
        // </Jumbotron>
      );
    });
    const { name, date, budget } = this.state;
    return (
      <div>
        <Container>
          <h4>Groups</h4>
          {groupElements}
          <br />
          <form onSubmit={this.submitHandler}>
            Name: <input type="text" placeholder="Name" name="name" value={name} onChange={this.changeHandler} ></input>
            Budget: <input type="decimal" placeholder="Budget" name="budget" value={budget} onChange={this.changeHandler} ></input>
            Date: <input type="date" placeholder="Date" name="date" value={date} onChange={this.changeHandler} ></input>
            <button type="submit" className="btn btn-primary ">Add a new group</button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Groups;
