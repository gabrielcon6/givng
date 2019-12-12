import React, { Component } from "react";
import Carousels from "../components/Carousels";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: 0
    };
  }
  render() {
    return (
      <div>
        {/* <h1> What about Givng?</h1>
        <br />
        <br />
        <br />
        <h1> Givng to your loved ones is Givng to yourself, twice!</h1> */}
        <Carousels />
      </div>
    );
  }
}

export default Dashboard;
