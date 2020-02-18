import React, { Component } from "react";
import { Router } from "@reach/router";

import DashboardPage from "./pages/dashboardPage";
import HomePage from "./pages/homePage";
import SuggestionsPage from "./pages/suggestionsPage";
import Login from "./components/Login";

import NavBar from "./components/NavBar";
import axios from "axios";

import GivngDetailsPage from "./pages/givngDetailsPage";
import "./index.css"

class App extends Component {
  constructor(props) {
    super(props);
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    this.state = {
      isLoggedIn: !!auth ? true : false,
      currentUser: null,
      userId: ""
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    if (!auth) return;

    axios
      .get(`/api/users/${auth.userId}`, {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      .then(response => {
        this.setState({
          currentUser: response.data,
          isLoggedIn: true,
          userId: auth.userId
        });
      });
  }

  handleLogin(email, password) {
    axios
      .post(`/api/auth/get_token`, {
        email: email,
        password: password
      })
      .then(response => {
        sessionStorage.setItem('auth', JSON.stringify(response.data));
        this.getUser();
      })
      .catch(err => {
        alert(err)
      });
  }

  handleLogout() {
    sessionStorage.setItem("auth", null);
    this.setState({ currentUser: null, isLoggedIn: false });
    window.location.href = "/"
  }
  render() {
    const userProps = {
      userId: this.state.userId,
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
          <Login path="/login" user={userProps} />
          <DashboardPage path="dashboard/" user={userProps} />
          <GivngDetailsPage path="givngs/:givngId" user={userProps} />
          <SuggestionsPage path="suggestions/:budget" user={userProps} />
        </Router>
      </>
    );
  }
}

export default App;