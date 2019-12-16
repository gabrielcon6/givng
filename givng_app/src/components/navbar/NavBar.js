import React, { Component } from "react";
import { Link } from "@reach/router";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";
import RegisterForm from "../RegisterForm";
import { navigate } from "@reach/router";
import axios from "axios";
import { StyledNav, StyledNavLinks, LogoImg } from "./StyledNavBar";
import style from "./login.css";

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
      .post(`http://localhost:3005/api/auth/get_token`, {
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
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="container">
            <h1>Login</h1>

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleEmailChange}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />

            <div className="clearfix">
              <button className="loginBtn" onClick={() => this.onLoginClick()}>
                Login
              </button>
            </div>
          </div>
          <body class="align">

  <div class="grid">

    <form action="https://httpbin.org/post" method="POST" class="form login">

      <div class="form__field">
        <label for="login__username"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use></svg><span class="hidden">Username</span></label>
        <input id="login__username" type="text" name="username" class="form__input" placeholder="Username" required>
      </div>

      <div class="form__field">
        <label for="login__password"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock"></use></svg><span class="hidden">Password</span></label>
        <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required>
      </div>

      <div class="form__field">
        <input type="submit" value="Sign In">
      </div>

    </form>

    <p class="text--center">Not a member? <a href="#">Sign up now</a> <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/images/icons.svg#arrow-right"></use></svg></p>

  </div>

  <svg xmlns="http://www.w3.org/2000/svg" class="icons"><symbol id="arrow-right" viewBox="0 0 1792 1792"><path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"/></symbol><symbol id="lock" viewBox="0 0 1792 1792"><path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></symbol><symbol id="user" viewBox="0 0 1792 1792"><path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"/></symbol></svg>

</body>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class SignUpModal extends Component {
  handleSignup(data) {
    axios
      .post(`http://localhost:3005/api/users`, {
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

class LoginModalTrigger extends Component {
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
                <LoginModalTrigger />
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
