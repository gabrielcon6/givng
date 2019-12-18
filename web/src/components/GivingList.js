import React, { Component } from "react";
import axios from "axios";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "@reach/router";
import { SERVER_URL } from "../config";
import "./giving-list.css"

class GivngList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      givngList: [],
      name: [],
      theme: [],
      userId: 1,// THIS IS HARDCODED - SHOULD ACCEPT PARAMS - USER ID
      date: [],
      budget: []
    };
    console.log(this.state.givngList)
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    const givngPost = {
      givng: {
        name: this.state.name,
        theme: this.state.theme,
        user_id: this.state.userId,
        date: this.state.date,
        budget: this.state.budget
      }
    }
    console.log(givngPost)
    axios
      .post(`${SERVER_URL}/givngs.json`, givngPost)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  removeHandler = () => {
    console.log(this.props.givng_id);
    axios
    .delete(`${SERVER_URL}/givngs/5.json`) // THIS IS HARDCODED - SHOULD ACCEPT PARAMS - GIVNG ID
  }
  
  componentDidMount() {
  
    axios
    .get(`${SERVER_URL}/givngs.json`)
    .then(res => {
      const myData = res.data;
      this.setState({
        givngList: myData
      });
    });
  }

  render() {
    const myGivngList = this.state.givngList.map((givng, index) => (
      <ul class="cards" key={index}>
        <li class="cards__item">
          <div class="card">
            <div class="card__image card__image--flowers"></div>
            <div class="card__content">
              <div class="card__title">{givng.name}</div>
              <p class="card__text">{givng.date}</p>
              <p class="card__text">{givng.budget}</p>
              <button class="btn btn--block card__btn"><Link to={`/givngs/${givng.id}`}>Access</Link></button>
              <form givng_id={givng.id} onSubmit={this.removeHandler}>
                <button type="submit" class="btn btn--block card__btn"><Link to={`/givngs/${givng.id}`}>Delete</Link></button>
              </form>
            </div>
          </div>
        </li>
      </ul>
    ));

    const { name, theme, date, budget} = this.state

    return (
      <div className="Hi" style={{textAlign: "center"}}>
        <br />
        <br />
        <h1 style={{textAlign: "center"}}>Your existing Givngs:</h1>
        <div style={{display: "inline-flex"}}>{myGivngList}</div>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>Add a New GIVNG:</Card.Text>
              <form onSubmit={this.submitHandler}><input type="text" placeholder="name" name="name" value={name} onChange={this.changeHandler}></input>
                <select type="text" name="theme" value={theme} onChange={this.changeHandler}>
                  <option value="Christmas">Christmas</option>
                  <option value="Birthdays List">Birthdays List</option> 
                  <option value="Other">Other</option> 
                </select>
                <input type="date" placeholder="date" name="date" value={date} onChange={this.changeHandler}></input>
                <input type="decimal" placeholder="budget" name="budget" value={budget} onChange={this.changeHandler}></input><br />
              <button type="submit">Submit</button></form>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default GivngList;
