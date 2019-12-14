import React, { Component } from "react";
import GivngDetailList from "../components/GivngDetailList";
class GivngDetailsPage extends Component {
  render() {
    return <div>Giving details page: {this.props.givngId}
    
    <GivngDetailList />
    
    </div>;
  }
}

export default GivngDetailsPage;
