import React, { Component } from "react";
import axios from "axios";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "@reach/router";
import { SERVER_URL } from "../config";

class GivngList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      givngList: [],
      // name: this.props.match.params.flightId,
      name: [],
      theme: [],
      userId: 1,
      date: [],
      budget: []
    };
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

  componentDidMount() {
  
    axios
    .get(`${SERVER_URL}/givngs.json`)
    .then(res => {
      const myData = res.data;
      console.log(myData);
      this.setState({
        givngList: myData
      });
    });
  }

  render() {
    const myGivngList = this.state.givngList.map((givng, index) => (
      <Link to="/">
        <CardDeck key={index}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{givng.name}</Card.Title>
              <Card.Text>{givng.date}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Budget: $ {givng.budget}</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Link>
    ));
      const { userId, name, theme, date, budget} = this.state
    return (
      <div>
        <br />
        <br />
        <h1 style={{textAlign: "center"}}>Your existing Givngs:</h1>
        <div>{myGivngList}</div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>+ Group</Card.Text>
              <form onSubmit={this.submitHandler}><input type="text" name="name" value={name} onChange={this.changeHandler}></input>
                <input type="text" name="theme" value={theme} onChange={this.changeHandler}></input>
                <input type="date" name="date" value={date} onChange={this.changeHandler}></input>
                <input type="decimal" name="budget" value={budget} onChange={this.changeHandler}></input>
              <button typle="submit">Submit</button></form>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default GivngList;
