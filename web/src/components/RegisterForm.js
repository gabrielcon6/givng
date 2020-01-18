import React, { Component } from "react";
import { Login, LoginTriangle, LoginHeader, LoginContainer, P, Input, BottomButtons } 
  from "../styles/StyledForm";
import { SERVER_URL } from "../config";
import { Modal, ButtonToolbar } from "react-bootstrap";
import { navigate } from "@reach/router";
import axios from "axios";


class SigUpContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        };
    }

    onSignupClick() {
        this.props.onSignup(this.state);
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({password_confirmation: e.target.value});
    }

    render() {
        return (
            <Login>
            <LoginTriangle />
            <LoginHeader>
                <Modal.Header closeButton>
                    Sign Up
                </Modal.Header>
            </LoginHeader>
            <LoginContainer>
                <label htmlFor="name"></label>
                <P><Input
                type="text"
                placeholder="Enter Name"
                name="name"
                required value={this.state.name} onChange={this.handleNameChange}
                /></P>

                <label htmlFor="email"></label>
                <P><Input
                type="email"
                placeholder="Enter Email"
                name="email"
                required value={this.state.email} onChange={this.handleEmailChange}
                /></P>
    
                <label htmlFor="psw"></label>
                <P><Input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required value={this.state.password} onChange={this.handlePasswordChange}
                /></P>
    
                <label htmlFor="psw-repeat"></label>
                <P><Input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                required value={this.state.password_confirmation} onChange={this.handleConfirmPasswordChange}
                /></P><br />
    
                <div className="clearfix">
                <P><BottomButtons type="submit" value="Register" className="loginBtn" onClick={() => this.onSignupClick() }></BottomButtons></P><br />
                </div>
            </LoginContainer>
        </Login>
);
    }
}

class SignUpModal extends Component {
    handleSignup(data) {
      axios
        .post(`${SERVER_URL}/api/users`, {
          user: {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation
          }
        })
        .then(response => {
          // TODO: use a toast service, or modal or something
          // better than an allert.
          // alert("user successfully created, please login");
          // Navigate to the home page.
          navigate("/");
          console.log(response);
        })
        .catch(err => {
          console.error(err);
        });
      this.props.onHide();
    }
    handleCancelSignup() {
      // Navigate to the home page.
      navigate("/home");
    }
    render() {
      return (
        <Modal
          {...this.props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <div className="container">
              <SigUpContent
                onSignup={data => this.handleSignup(data)}
                onCancelClick={() => this.handleCancelSignup()}
              ></SigUpContent>
            </div>
          </Modal.Body>
        </Modal>
      );
    }
  }

class RegisterForm extends Component {
    state = {
        show: false
    };
    render() {
        return (
        <ButtonToolbar>
            <div style={{letterSpacing: "0.1rem"}} onClick={() => this.setState({ show: true })}>Sign Up</div>
    
            <SignUpModal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
            />
        </ButtonToolbar>
        );
    }
    }

export default RegisterForm;