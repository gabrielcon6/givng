import React, { Component } from "react";
import { Container, CardsItem, MyCard, CardContent, CardTitle, CardText } from "../styles/StyledGivngList"
import { Title, H2 } from "../styles/StyledGivngDetailList";

export default class SuggestionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      this_budget: this.props.budget
    };
  }

  async componentDidMount() {
    const api_key ='aEMUHyG8DBAXmpLf1GACP4bG';
    console.log(this.state.this_budget)
    const data = await fetch(`https://api.bestbuy.com/v1/products(regularPrice<=${this.state.this_budget})?apiKey=${api_key}&sort=regularPrice.dsc&show=categoryPath.name,addToCartUrl,image,name,regularPrice,type&pageSize=25&format=json`)
    const response = await data.json()
    this.setState({
        data: response.products,
    });
    console.log(this.props);
    console.log(this.state.data)
    console.log(this.props.suggestionBud)
  }

  render() {
    
    const myApiList = 
    this.state.data.map(s => (
        <CardsItem key={s.id}>
          <MyCard>
            <img src={s.image} alt="Best Buy" width="300px" height="300vh"></img>
            <CardContent>
              <CardTitle>{s.name}</CardTitle>
              <CardText bottom>Price: $ {s.regularPrice}</CardText>
              <CardText bottom>Category: {s.type}</CardText>
              {/* <MyButton ><Link to={s.addToCartUrl}>Buy it Now</Link></MyButton> */}
            </CardContent>
          </MyCard>
        </CardsItem>

    ));
    return (
      <div style={{paddingTop: "10vh", textAlign: "center"}}>
        <Title>Gifts Suggestions</Title>
        <H2>Budget: $ {Math.round(((Number(this.state.this_budget)) + 0.00001) * 100) / 100}</H2>< br />
        <Container>{myApiList}</Container>
      </div>
    );
  }
}