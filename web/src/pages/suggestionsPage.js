import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import { Container, CardsItem, MyCard, CardsImage, CardContent, CardTitle, CardImage, CardText, MyButton } from "../styles/StyledGivngList"

export default class SuggestionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const api_key ='aEMUHyG8DBAXmpLf1GACP4bG';
    const data = await fetch(`https://api.bestbuy.com/v1/products(regularPrice<=22)?apiKey=${api_key}&sort=regularPrice.dsc&show=categoryPath.name,addToCartUrl,image,name,regularPrice,type&pageSize=15&format=json`)
    const response = await data.json()
    this.setState({
        data: response.products,
    });
    console.log(this.props);
    console.log(this.state.data)
  }

  render() {
    
    const myApiList = 
    this.state.data.map(s => (
        <CardsItem key={s.id}>
          <MyCard>
            <img src={s.image} width="300px" height="300vh"></img>
            <CardContent>
              <CardTitle>{s.name}</CardTitle>
              <CardText>Price: $ {s.regularPrice}</CardText>
              <CardText>{s.type}</CardText>
              <MyButton ><Link to={s.addToCartUrl}>Buy it Now</Link></MyButton>
            </CardContent>
          </MyCard>
        </CardsItem>

    ));
    return (
      <div style={{paddingTop: "10vh", textAlign: "center"}}>
        <h1>Gifts Suggestions</h1>
        <h2>Budget: TBA {}</h2>< br />
        <Container>{myApiList}</Container>
            
      </div>
    );
  }
}
