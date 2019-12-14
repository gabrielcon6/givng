import React from "react";
import Carousels from "../components/Carousels";
import { navigate, Redirect } from "@reach/router";

class HomePage extends React.Component {
  render() {
    return (
      <>
        {this.props.user.isLoggedIn && <Redirect to="/dashboard" noThrow />}
        home page works!!!! unfortunatelly
        <Carousels />
      </>
    );
  }
}

export default HomePage;
