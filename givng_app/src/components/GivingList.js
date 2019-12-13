import React, { Component } from "react";
import axios from "axios";
import { Card, CardDeck } from "react-bootstrap";


class Givngs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          givngList: []
        };
      }
    
      componentDidMount() {
        const serverURL = `http://localhost:3005/givngs.json`;
        axios.get(serverURL).then(res => {
          const myData = res.data;
          console.log(myData)
          this.setState({
            givngList: myData
          });
        });
      }
    
      render() {
        const myGivngList = this.state.givngList.map((givng, index) => (
            <CardDeck key={index}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{givng.name}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
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
          </div>
        );
      }
    }

export default Givngs;