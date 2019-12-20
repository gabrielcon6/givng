import React from "react";
import { Link } from "@reach/router";
import { PeopleContainer, Person, XButton, XPerson, Underline } from "../styles/StyledGroups"
import { BottomButtons, Input } from "../styles/StyledGivngList.js"

class People extends React.Component {
  
  state = {
    peopleList: [
      {
        name: "",
        person_budget: ""
      },
    ],
    groupBudget: this.props.groupBudget,
    size: this.props.people.length
  };
  componentDidMount() {

  }
 
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNewPerson = e => {
    e.preventDefault();

    this.props.onAddPerson({
      name: this.state.name,
      person_budget: this.state.budget,
      is_bought: false
    });
    
  };
  render() {
     console.log(this.props);
     let size = this.props.people.length
     let groupBudget = this.props.groupBudget
      const peopleElements = this.props.people.map((person, index) => {
      return (
        <div key={index}>
          <XPerson>
      <Person>{person.name}  <b>$</b> {Math.round(((groupBudget/size) + 0.00001) * 100) / 100}</Person> 
          <XButton onClick={() => this.props.onDeletePerson(person.id)}>x</XButton>
          </XPerson>
          {/* <Link to="/suggestions" ><button className="btn btn-outline-primary">Gift Suggestion</button></Link> */}
          {/* <Route path="/suggestions" budget={groupBudget/size}><button className="btn btn-outline-primary">Gift Suggestion</button></Route> */}
        </div>
      );
    });
const { name } = this.state;

    return (
      <PeopleContainer>
        {/* <PeopleTitle>List of <br></br>People</PeopleTitle> */}
        {peopleElements}
        <Link to={`/suggestions/${this.state.groupBudget/this.state.size}`}><BottomButtons primary style={{marginBottom: "4vh"}}>Gift Suggestion</BottomButtons></Link>

        <form onSubmit={this.submitHandler}>
          Name:{" "}
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.changeHandler}
          ></Input>
          <BottomButtons onClick={this.addNewPerson}>
            Add Person
          </BottomButtons>
        </form>
          <Underline></Underline>

      </PeopleContainer>
    );
  }
}

export default People;