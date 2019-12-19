import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

export default class SuggestionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const data = await fetch(`https://api.bestbuy.com/v1/products(regularPrice<=22)?apiKey=aEMUHyG8DBAXmpLf1GACP4bG&sort=regularPrice.dsc&show=categoryPath.name,addToCartUrl,image,name,regularPrice,type&format=json`)
    const response = await data.json()
    this.setState({
        data: response.products,
    });
    console.log(this.props);
    console.log(this.state.data)
  }

  render() {
    
    const myDatabase = 
    this.state.data.map(s => (
      <Fragment key={s.id}>
        <li><img src={s.image} width="300px" height="300vh"></img></li>
        <li><span style={{fontWeight: "bold"}}>Product: </span> {s.name} </li>
        <li><span style={{fontWeight: "bold"}}>Price: </span>$ {s.regularPrice} </li>
        <li><span style={{fontWeight: "bold"}}>Category: </span>{s.type} </li>
        <Link to={s.addToCartUrl}><li><span style={{fontWeight: "bold"}}>Buy it now: </span>{s.type} </li></Link>

      </Fragment>
    ));
    return (
      <div style={{paddingTop: "10vh", textAlign: "center"}}>
        <h1>Gifts Suggestions</h1>
        <h2>Budget: {}</h2>< br />
        <ul>{myDatabase}</ul>
      </div>
    );
  }
}
