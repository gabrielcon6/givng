import React, { Route } from "react";
import { SERVER_URL } from "../config";
import axios from "axios";
import { Link } from "@reach/router";
class People extends React.Component {
  state = {
    peopleList: [
      {
        name: "",
        person_budget: ""
      }
    ]
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
     let suggestionBud = groupBudget/size
      const peopleElements = this.props.people.map((person, index) => {
      return (
        <div key={index}>
          <h3>{person.name}</h3>
          <h3>{groupBudget/size}</h3>
          {/* <Link to="/suggestions" ><button className="btn btn-outline-primary">Gift Suggestion</button></Link> */}
          <Link to={`/suggestions/${groupBudget/size}`}><button className="btn btn-outline-primary">Gift Suggestion</button></Link>
          {/* <Route path="/suggestions" budget={groupBudget/size}><button className="btn btn-outline-primary">Gift Suggestion</button></Route> */}

          <button className="btn btn-outline-primary" onClick={() => this.props.onDeletePerson(person.id)}>
            Delete Person
          </button>
        </div>
      );
    });
const { name, budget } = this.state;
    return (
      <div>
        

        <form onSubmit={this.submitHandler}>
          Name:{" "}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.changeHandler}
          ></input>
          {/* Budget:{" "}
          <input
            type="decimal"
            placeholder="Budget"
            name="budget"
            value={budget}
            onChange={this.changeHandler}
          ></input> */}
          <button className="btn btn-outline-primary" onClick={this.addNewPerson}>
            Add Person
          </button>
          {peopleElements}
        </form>
      </div>
    );
  }
}

export default People;