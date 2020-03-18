import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import People from "./People";
import { StyledDiv, Title, Budget } from "../styles/StyledGroups";
import { BottomButtons, Input, MiddleContainer } from "../styles/StyledGivngList.js"

class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      expandedGroups: []
    };
  }

  toggleHidden(groupId) {
    const expandedGroups = [...this.state.expandedGroups];

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
    // e.preventDefault();
    this.setState({ [e.target.name]: "New Group" });
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
            <Budget> ${group.budget}0</Budget>
            <BottomButtons primary onClick={() => this.toggleHidden(group.id)}> View List </BottomButtons>
            <BottomButtons primary delete onClick={() => this.handleDeleteGroupClick(group.id)}> Delete </BottomButtons>
            <BottomButtons primary delete onClick={() => this.changeHandler(group.id)}> Edit </BottomButtons>
            {this.state.expandedGroups.includes(group.id) && <People 
              people={group.people}
              onAddPerson={(person) => this.onAddPerson(group.id, person)}
              onDeletePerson={this.props.onDeletePerson}
              groupBudget={group.budget}
            
            />}
          </StyledDiv>
        // </Jumbotron>
      );
    });
    const { name, budget } = this.state;
    return (
      <div>
        <MiddleContainer>
        {groupElements}

          <form onSubmit={this.submitHandler} style={{paddingTop: "5vh"}}>
            Name:{" "}
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.changeHandler}
            ></Input>
            Budget:{" "}
            <Input
              type="decimal"
              placeholder="Budget"
              name="budget"
              value={budget}
              onChange={this.changeHandler}
            ></Input>
          
            <BottomButtons type="submit">
              Add a new group
            </BottomButtons>
          </form>
          <br />
          
        </MiddleContainer>
        
      </div>
    );
  }
}

export default Groups;
