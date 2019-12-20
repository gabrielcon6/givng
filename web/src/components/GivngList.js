import React, { Component } from "react";
import axios from "axios";
import { Card, CardDeck } from "react-bootstrap";
import { Link } from "@reach/router";
import { SERVER_URL } from "../config";
import "../index.css"
import { CardsParent, Title, CardsItem, MyCard, 
        CardImage, CardTitle, Select,
        CardContent, CardText, Input, BottomContainer, 
        BottomButtons, Container } 
        from "../styles/StyledGivngList.js"


class GivngList extends Component {
  
  constructor(props) {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    super(props);
    this.state = {
      givngList: [],
      name: [],
      theme: [],
      userId: auth.userId,// THIS IS HARDCODED - SHOULD ACCEPT PARAMS - USER ID
      date: [],
      budget: [],
      // auth: JSON.parse(sessionStorage.getItem("auth"))
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
        window.location.reload();
      })
      .catch(error => {
        console.log(error)
      })
  }

  removeHandler = (props) => {
    axios
    .delete(`${SERVER_URL}/givngs/${props}.json`) // THIS IS HARDCODED - SHOULD ACCEPT PARAMS - GIVNG ID
    .then(res => {
      window.location.reload();
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  componentDidMount() {
    // this.setState({userId: {this.props.userProps.currentUser.id}})
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
        <CardsItem key={index}>
          <MyCard>
          <Link to={`/givngs/${givng.id}`}><CardImage className={`${givng.theme}`}></CardImage></Link>
            <CardContent>
            <CardTitle>{givng.name}</CardTitle>
              <CardText>{givng.date}</CardText>
              <CardText>Budget: $ {givng.budget}0</CardText>
                <Link to={`/givngs/${givng.id}`}><BottomButtons primary type="submit">View</BottomButtons></Link>
                <BottomButtons primary delete type="submit" onClick={() => this.removeHandler(givng.id)}>Delete</BottomButtons>
            </CardContent>
          </MyCard>
        </CardsItem>
    ));

    const { name, theme, date, budget} = this.state

    return (
      <div style={{marginTop: "-1.5vh"}}>
        <Title>Your existing Givngs</Title>
      <Container >
        <CardsParent>{myGivngList}</CardsParent>
        </Container>

        <CardDeck >
          <Card style={{backgroundColor: "#DFE3E8", marginTop: "4vh"}}>
            <Card.Body>
              <Card.Title style={{letterSpacing: "0.3rem"}}>Add a New GIVNG</Card.Title>
              <Card.Text>
              <form onSubmit={this.submitHandler}>
                <Input type="text" placeholder="name" name="name" value={name} onChange={this.changeHandler}></Input><br />
                <Select type="text" name="theme" value={theme} onChange={this.changeHandler}>
                  <option></option>
                  <option>Christmas</option>
                  <option>Birthdays List</option> 
                  <option>Other</option> 
                </Select>< br/>
                {/* <Input type="text" placeholder="theme: i.e 'Christmas" name="theme" value={theme} onChange={this.changeHandler}></Input> <br /> */}
                <Input type="date" placeholder="date" name="date" value={date} onChange={this.changeHandler}></Input> <br />
                <Input type="decimal" placeholder="budget" name="budget" value={budget} onChange={this.changeHandler}></Input><br />
              <BottomButtons type="submit">Submit</BottomButtons></form>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <BottomContainer />
      </div>
    );
  }
}

export default GivngList;
