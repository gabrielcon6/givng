import React, { Component } from "react";
import GivingList from "../components/GivingList";
import { Redirect } from "@reach/router";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        {!this.props.user.isLoggedIn && <Redirect to="/" noThrow />}
        dashboard page works
        <GivingList />
      </div>
    );
  }
}

export default DashboardPage;
