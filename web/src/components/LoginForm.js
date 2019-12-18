import React, { Component } from "react";
import { Modal, ButtonToolbar } from "react-bootstrap";
import { Login, LoginTriangle, LoginHeader, LoginContainer, P, Input, BottomButtons } 
  from "../styles/StyledForm";

class LoginModal extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }
  
    onLoginClick() {
      this.props.user.user.login();
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
                    <P><BottomButtons type="submit" value="Log in" className="loginBtn" onClick={() => this.props.login(this.state.email, this.state.password)}></BottomButtons></P>< br/>
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
          <div onClick={() => this.setState({ show: true })}>Create a Givng List</div>
  
          <LoginModal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
            login={this.props.user.login}
          />
        </ButtonToolbar>
      );
    }
  }
  
  export default LoginForm;