import React from "react";

import axios from "axios";
import { SERVER_URL } from "../config";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Jumbotron } from "react-bootstrap";
import People from "./People";
import { StyledDiv, Title, Budget, StyledContainer } from "../styles/StyledGroups";


class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      expandedGroups: []
    };
  }

  toggleHidden(groupId) {
    // make a copy of our expandedGroups state variable
    const expandedGroups = [...this.state.expandedGroups];

    //                    0   1   2
    // expandedGroups = [ 10, 12, 3]
    // indexOf(12) => 1
    // indexOf(13) => -1


    // Add / remove the item from the expandedGroup array
    const index = expandedGroups.indexOf(groupId);
    if( index >= 0)  expandedGroups.splice(index, 1);
    else  expandedGroups.push(groupId);
      
    // update state
    this.setState({  expandedGroups: expandedGroups });
  }
  componentDidMount() {
    
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.onAddNewGivng({
      name: this.state.name,
      budget: this.state.budget,

    });
  };

  handleDeleteGroupClick = groupId => {
    this.props.onDeleteGroup(groupId);
  }

  onAddPerson = (groupId, person) => {
    person.group_id = groupId;
    this.props.onAddPerson(person);
  }

  render() {
      console.log(this.props);
      const groupElements = this.props.groups.map((group, index) => {
      return (
        // <Jumbotron>
          <StyledDiv key={index}>
            <Title>{group.name}</Title>
            <Budget>{group.budget}</Budget>
            <button className="btn btn-outline-info" onClick={() => this.toggleHidden(group.id)}> Learn More </button>
            <button className="btn btn-outline-info" onClick={() => this.handleDeleteGroupClick(group.id)}> Delete Group</button>
            {this.state.expandedGroups.includes(group.id) && <People 
              people={group.people}
              onAddPerson={(person) => this.onAddPerson(group.id, person)}
              onDeletePerson={this.props.onDeletePerson}
            
            />}
          </StyledDiv>
        // </Jumbotron>
      );
    });
    const { name, budget } = this.state;
    return (
      <div>
        <StyledContainer>
          
          <form onSubmit={this.submitHandler}>
            Name:{" "}
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.changeHandler}
            ></input>
            Budget:{" "}
            <input
              type="decimal"
              placeholder="Budget"
              name="budget"
              value={budget}
              onChange={this.changeHandler}
            ></input>

            <button type="submit" className="btn btn-outline-primary ">
              Add a new group
            </button>
          </form>
          {groupElements}
          <br />
          
        </StyledContainer>
        
      </div>
    );
  }
}

export default Groups;
