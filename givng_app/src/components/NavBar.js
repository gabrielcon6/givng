import React, { Component } from 'react';
import { Link } from "@reach/router"
import styled from 'styled-components';
import { Modal, Button, ButtonToolbar} from "react-bootstrap";

const StyledNavBar = styled.nav`
    background-color: rgb(250, 195, 42);
    width: 100vw;
    float: right;
    height: 7vh;
`;

export const StyledNavLinks = styled.p`
    color: #616161;
    float: right;
    margin: 0 1vw;
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: #603e94;
        color: white;
        font-size: 1.1rem;
    }
`;

const LogoImg = styled.img`
    padding: 0;
    margin-top: -10vh;
    margin-left: -1vw;
    width: 20vw;
    height: 35vh;
    position: absolute;
    cursor: pointer;
`

class MyVerticallyCenteredModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };
}

onLoginClick() {
    // TODO: validate inputs
    this.props.login(this.state.email, this.state.password);
}

handleEmailChange = (e) => {
    this.setState({email: e.target.value});
}

handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
}
    render(){
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

                
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required
                    value={this.state.email} onChange={this.handleEmailChange}  
                    />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required 
                    value={this.state.password} onChange={this.handlePasswordChange} 
                    />

                <div className="clearfix">
                    <button className="loginBtn" onClick={() => this.onLoginClick() }>Login Up</button>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
  
class LoginModal extends Component {
  state = {
    show: false,
  }
  render() {
    return (
      <ButtonToolbar>
        <div onClick={() => this.setState({ show: true })}>
          Login
        </div>
  
        <MyVerticallyCenteredModal
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
                <Link to="/"><LogoImg src={"./givng_logo.png"}/></Link>
                <StyledNavBar>
                    <StyledNavLinks>Logout</StyledNavLinks>
                    <StyledNavLinks>Special Dates</StyledNavLinks>
                    <StyledNavLinks>Favourite Friends</StyledNavLinks>

                    { !user.isLoggedIn &&
                        <>
                            {/* <StyledNavLinks style={{float:'right'}}><Link to="/">Login</Link></StyledNavLinks>
                            <StyledNavLinks style={{float:'right'}}><Link to="/register">Register</Link></StyledNavLinks> */}
                            <StyledNavLinks style={{float:'right'}}><LoginModal /></StyledNavLinks>
                        </>
                    }
                    

                    { user.isLoggedIn && user.currentUser && 
                        <li style={{float:'right', marginRight: '5px'}}>
                            <span className="app-nav-user-info">
                                {user.currentUser.name}<br />
                                <a href="#" onClick={(e)=>this.handleLogoutClick(e)}>logout</a>
                            </span>
                        </li>
                    }
                </StyledNavBar>
            </div>
        );
    }
}