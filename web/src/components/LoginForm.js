import React, { Component } from "react";
import axios from "axios";
import { SERVER_URL } from "../config";
import { Modal, ButtonToolbar } from "react-bootstrap";
import { Login, LoginTriangle, LoginHeader, LoginContainer, P, Input, BottomButtons } from "./StyledForm";

class LoginModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
  
    onLoginClick() {
      axios
        .post(`${SERVER_URL}/api/auth/get_token`, {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          // TODO: use a toast service, or modal or something
          // better than an allert.
          alert("Login");
          // Navigate to the home page.
  
          console.log(response);
          console.log(response.data.token);
          sessionStorage.setItem("auth", JSON.stringify(response.data));
          // navigate("/dashboard");
          window.location = "/dashboard";
        })
        .catch(err => {
          alert("Wrong Password, try again!");
          console.error(err);
        });
      this.props.onHide();
    }
  
    handleEmailChange = e => {
      this.setState({ email: e.target.value });
    };
  
    handlePasswordChange = e => {
      this.setState({ password: e.target.value });
    };
    render() {
      return (
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Login>
                <LoginTriangle />
                <LoginHeader>
                  <Modal.Header closeButton>
                      Login
                  </Modal.Header>
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
        
                    <label htmlFor="psw"></label>
                    <P><Input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    /></P><br />
        
                    <div className="clearfix">
                    <P><BottomButtons type="submit" value="Log in" className="loginBtn" onClick={() => this.onLoginClick()}></BottomButtons></P>< br/>
                    </div>
                </LoginContainer>
            </Login>
          </Modal.Body>
        </Modal>
      );
    }
  }
  
class LoginForm extends Component {
    state = {
      show: false
    };
    render() {
      return (
        <ButtonToolbar>
          <div onClick={() => this.setState({ show: true })}>Create a Givng</div>
  
          <LoginModal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
          />
        </ButtonToolbar>
      );
    }
  }
  
  export default LoginForm;