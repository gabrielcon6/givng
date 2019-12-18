import React from "react";
import { SERVER_URL } from "../config";
import axios from "axios";

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
 
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    const peoplePost = {
      people: {
        name: this.state.name,
        person_budget: this.state.budget,
        group_id: 5,
        is_bought: false
      }
    };
    console.log(peoplePost);
    axios
      .post(`${SERVER_URL}/people.json`, peoplePost)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const peopleElements = this.state.peopleList.map((peopleList, index) => {
      return (
        <div key={index}>
          <h2>{peopleList.name}</h2>
          <h3>{peopleList.person_budget}</h3>
        </div>
      );
    });
const { name, budget } = this.state;
    return (
      <div>
        {peopleElements}

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
          

          <button type="submit" className="btn btn-primary ">
            Add people
          </button>
        </form>
      </div>
    );
  }
}

export default People;
