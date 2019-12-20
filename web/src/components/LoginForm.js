import React, { Component } from "react";
import { Login, LoginTriangle, LoginHeader, LoginContainer, P, Input, BottomButtons } 
 from "../styles/StyledForm";
import { Redirect } from "@reach/router";


export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onLoginClick() {
        this.props.user.login(this.state.email, this.state.password);
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    render() {
        return (
        <div>
          {this.props.user.isLoggedIn && <Redirect to="/dashboard" noThrow />}    
          <br /><br /><br /><br /><br />
          <Login>
            <LoginTriangle />
            <LoginHeader>
                Login
            </LoginHeader>
            <LoginContainer>
              <label htmlFor="email"></label>
              <P><Input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleEmailChange}
              /></P>
  
              <label htmlFor="password"></label>
              <P><Input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handlePasswordChange}
              /></P><br />
  
              <div className="clearfix">
              <P><BottomButtons value="Login" className="loginBtn" onClick={() => this.onLoginClick() }></BottomButtons></P>
              </div>
            </LoginContainer>
          </Login>
        </div>
    )}}
