import React, { Component } from "react";
import axios from "axios";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "@reach/router";
import { SERVER_URL } from "../config";

class GivngList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      givngList: []
    };
  }

  componentDidMount() {
  
    axios.get(`${SERVER_URL}/givngs.json`).then(res => {
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

    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Your existing Givngs:</h1>
        <div>{myGivngList}</div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>+ Group</Card.Text>
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
