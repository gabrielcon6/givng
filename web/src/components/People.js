import React from "react";
import { SERVER_URL } from "../config";
import Axios from "axios";

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
    let self = this;

    fetch(SERVER_URL + "/people.json")
      .then(response => response.json())
      .then(json => {
        self.setState(state => {
          console.log("json :", json);

          return {
            ...state,
            peopleList: [...json]
          };
        });
      });
  }
  handlePeopleEntered(event) {
    const newPeople = event.target.value.toUpperCase();
    this.setState({ name: newPeople });
  }
  handleBudgetEntered(event) {
    const newBudget = event.target.value.toUpperCase();
    this.setState({ person_budget: newBudget });
  }

  handleAddPeople(data) {
    Axios.post(`http://localhost:3005/people.json`, {
      people: {
        name: data.name,
        budget: data.person_budget
      }
    })
      .then(response => {
        // TODO: use a toast service, or modal or something
        // better than an allert.
        alert("user successfully created, please login");
        // Navigate to the home page.
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    this.props.onHide();
  }
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleBudgetChange = e => {
    this.setState({ budget: e.target.value });
  };

  render() {
    const peopleElements = this.state.peopleList.map((peopleList, index) => {
      return (
        <div key={peopleList.id}>
          <h2>{peopleList.name}</h2>
          <h3>{peopleList.person_budget}</h3>
        </div>
      );
    });

    return (
      <div>
        {peopleElements}

        <label id="From">
          New People
          <input
            type="text"
            onChange={event => this.handlePeopleEntered(event)}
          />
        </label>
        <label id="From">
          Budget
          <input
            type="text"
            onChange={event => this.handleBudgetEntered(event)}
          />
        </label>
        <button onClick={() => this.handleAddPeople()}>Add</button>
      </div>
    );
  }
}

export default People;
