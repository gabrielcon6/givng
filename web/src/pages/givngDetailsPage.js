import React, { Component } from "react";
import GivngDetailList from "../components/GivngDetailList";
import Groups from "../components/Groups";
import { Redirect } from "@reach/router";

class GivngDetailsPage extends Component {
  render() {
    return (
      <div>
        {!this.props.user.isLoggedIn && <Redirect to="/" noThrow />}
        dashboard page works
        Giving details page: {this.props.givngId}
        <GivngDetailList />
        <Groups />
      </div>
    );
  }
}

export default GivngDetailsPage;
