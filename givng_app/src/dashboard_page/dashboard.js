import React from "react";
import Carousels from "../global_components/Carousels";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: 0
    };
  }
  render() {
    return (
      <div>
        <h1> What about Givng?</h1>
        <br />
        <br />
        <br />
        <h1> Givng to your loved ones is Givng to yourself, twice!</h1>
        <Carousels />
      </div>
    );
  }
}
