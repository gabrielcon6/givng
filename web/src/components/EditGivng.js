import React from 'react';
import axios from 'axios';

export default class EditGivng extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        name: "Oi",
        theme: "Xmas",
        user_id: 1,
        date: "",
        budget: "12",
    givngListId: this.props.givng
};
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = (event) => {
    this.setState( {
            [event.target.name]: event.target.value,
        }
)
    console.log(this.state.name)
  }

  myChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    // const newGivngList = this.state.gi;
    console.log('newGivngList');
    alert("You are submitting " + 'newGivngList');
    //     axios.put(`/givngs/${this.state.givngListId}.json`, newGivngList).then(res => {
    // });
    }
  


  render() {
      const { name, theme, date, budget } = this.state;
      // console.log(this.state.givngListId)

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

