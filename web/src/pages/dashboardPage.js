import React, { Component } from "react";
import GivngList from "../components/GivngList";
import { Redirect } from "@reach/router";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        {/* {!this.props.user.isLoggedIn && <Redirect to="/" noThrow />} */}
        dashboard page works
        
        <GivngList />
      </div>
    );
  }
}

export default DashboardPage;
