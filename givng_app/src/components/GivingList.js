import React, { Component } from "react";
import axios from "axios";

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
          this.setState({
            givngList: myData
          });
        });
      }
    
      render() {
        const myGivngList = this.state.givngList.map((givng, index) => (
          <ul key={index}>
            <li>Givng: {givng.name}</li>
          </ul>
        ));
    
        return (
          <div>
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