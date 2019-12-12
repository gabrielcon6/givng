import "../App.css";

import React from "react";
import { Router, navigate } from "@reach/router";

import Landing from "../landing_page/landing";
import Register from "../register_page/register";
import Dashboard from "../dashboard_page/dashboard";

import NavBar from "../global_components/NavBar";
import { SERVER_URL } from "../config.js";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
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

        // now that login has occured, navigate to the home page
        navigate("/");
      });
  }

  //   axios.post(`http://localhost:3000/api/users`, {
  //     user: {
  //         name: 'Aaron Cox',
  //         email: 'aaron@ga.com.au',
  //         password: 'abc123',
  //         password_confirmation: 'abc123'
  //     }
  // }).then(response => {
  //     console.log('Successfully created user: ')
  //     console.log(response);
  // }).catch(err => {
  //     console.log('Failed to create user with error: ')
  //     console.log(err);
  // });

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
          <Landing path="/" user={userProps} />
          <Register path="/register" user={userProps} />
          <Dashboard path="/dashboard" user={userProps} />
        </Router>
      </>
    );
  }
}
