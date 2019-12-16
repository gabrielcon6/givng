import React, { Component } from "react";
import { Link } from "@reach/router";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";
import RegisterForm from "../RegisterForm";
import LoginForm from "../login_form/LoginForm";
import { navigate } from "@reach/router";
import axios from "axios";
import { StyledNav, StyledNavLinks, LogoImg } from "./StyledNavBar";
import { SERVER_URL } from "../../config";
// import "./StyledLoginForm.js"

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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="container">
            <RegisterForm
              onSignup={data => this.handleSignup(data)}
              onCancelClick={() => this.handleCancelSignup()}
            ></RegisterForm>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class SignUpModalTrigger extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <ButtonToolbar>
        <div onClick={() => this.setState({ show: true })}>Register</div>

        <SignUpModal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        />
      </ButtonToolbar>
    );
  }
}

export default class NavBar extends Component {
  handleLogoutClick(event) {
    event.preventDefault();
    this.props.user.logout();
  }

  render() {
    const user = this.props.user;

    return (
      <div>
        <StyledNav>
        <Link to="/">
          <LogoImg src={"./givng_logo7.png"} />
        </Link>
          {!user.isLoggedIn && (
            <>
              {/* <StyledNavLinks style={{float:'right'}}><Link to="/">Login</Link></StyledNavLinks> */}
              {/* <StyledNavLinks style={{float:'right'}}><Link to="/register">Register</Link></StyledNavLinks> */}
              <StyledNavLinks style={{ float: "right" }}>
                <SignUpModalTrigger />
              </StyledNavLinks>
              <StyledNavLinks style={{ float: "right" }}>
                <LoginForm />
              </StyledNavLinks>
            </>
          )}

          {user.isLoggedIn && user.currentUser && (
            <>
              <StyledNavLinks>Special Dates</StyledNavLinks>
              <StyledNavLinks>Favourite Friends</StyledNavLinks>
              <StyledNavLinks>Logout</StyledNavLinks>
              <li style={{ float: "right", marginRight: "5px" }}>
                <span className="app-nav-user-info">
                  {user.currentUser.email}
                  <br />
                  <a href="#" onClick={e => this.handleLogoutClick(e)}>
                    logout
                  </a>
                </span>
              </li>
            </>
          )}
        </StyledNav>
      </div>
    );
  }
}