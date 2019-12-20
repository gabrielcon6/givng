import React from 'react';
import axios from 'axios';
import { SERVER_URL } from "../config";

export default class EditGivng extends React.Component {
  constructor(props) {
    super(props);
    this.state = { givngList: [ {
        name: "Oi",
        theme: "Xmas",
        user_id: 1,
        date: "",
        budget: "12",
    }
    ],
    givngListId: this.props.givng
};
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = (event) => {
    this.setState( {
        givngList: [{ 
            [event.target.name]: event.target.value,
        }
        ]
    })
    console.log(this.state.givngList)
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    const { name, theme, date, budget } = this.state.givngList[0];
    console.log(name);
    console.log("qqr asneira");
    alert("You are submitting " + name);
    alert("You are submitting " + theme);
    alert("You are submitting " + date);
    alert("You are submitting " + budget);
        axios.put(`${SERVER_URL}/givngs/${this.state.givngListId}.json`, this.state.givingList).then(res => {
    });
    }
  


  render() {
      const { name, theme, date, budget } = this.state.givngList[0];
      console.log(this.state.givngListId)

    return (
      <form>
          <br />
          <br />
      <lable>{name}</lable>
      <input type='text' name="name" 
      value={name}
      onChange={this.myChangeHandler}
      />

      <lable>{theme}</lable>
      <input type='text' name="theme" 
            value={theme}
            onChange={this.myChangeHandler}

      />

      <lable>{date}</lable>
      <input type='date' name="date" 
            value={date}
            onChange={this.myChangeHandler}

      />

      <lable>{budget}</lable>
      <input type='decimal' name="budget" 
            value={budget}
            onChange={this.myChangeHandler}

      />

<button type="submit" onSubmit={this.mySubmitHandler}>Submit</button>

      </form>
    );
  }
}

