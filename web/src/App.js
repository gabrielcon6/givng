import React, { Component } from "react";
import { Router } from "@reach/router";

import DashboardPage from "./pages/dashboardPage";
import HomePage from "./pages/homePage";

import NavBar from "./components/navbar/NavBar";
import { SERVER_URL } from "./config.js";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import GivngDetailsPage from "./pages/givngDetailsPage";
import "./index.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    this.state = {
      isLoggedIn: !!auth ? true : false,
      currentUser: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    if (!auth) return;

    axios
      .get(`${SERVER_URL}/api/users/${auth.userId}`, {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      .then(response => {
        this.setState({
          currentUser: response.data,
          isLoggedIn: true
        });
      });
  }

  handleLogin(email, password) {
    axios
      .post(`${SERVER_URL}/api/auth/get_token`, {
        email: email,
        password: password
      })
      .then(response => {
        sessionStorage.setItem("auth", JSON.stringify(response.data));
        this.getUser();
      })
      .catch(err => {
        // todo some error
      });
  }

  handleLogout() {
    sessionStorage.setItem("auth", null);
    this.setState({ currentUser: null, isLoggedIn: false });
  }

  render() {
    const userProps = {
      isLoggedIn: this.state.isLoggedIn,
      currentUser: this.state.currentUser,
      logout: () => this.handleLogout(),
      login: (email, pass) => this.handleLogin(email, pass)
    };

    return (
      <>
        <NavBar user={userProps}></NavBar>

        <Router>
          <HomePage path="/" user={userProps} />
          <DashboardPage path="dashboard" user={userProps} />
          <GivngDetailsPage path="givngs/:givngId" user={userProps} />

          {/* <Dashboard path="/" user={userProps} />
          <Register path="/register" user={userProps} />
          <Home path="/home" user={userProps} />
          <Home path="/dashboard" user={userProps} /> */}
          {/* <Dashboard path="/dashboard" user={userProps} /> */}
        </Router>
      </>
    );
  }
}
