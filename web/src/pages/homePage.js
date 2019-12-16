import React, { Component } from "react";
import HomeContent from "../components/home_content/HomeContent";
import { Redirect } from "@reach/router";

class HomePage extends Component {
  render() {
    return (
      <>
        {this.props.user.isLoggedIn && <Redirect to="/dashboard" noThrow />}
        <HomeContent />
      </>
    );
  }
}

export default HomePage;
