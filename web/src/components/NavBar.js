import React, { Component } from "react";
import { Link } from "@reach/router";
import RegisterForm from "./RegisterForm";
import { StyledNav, StyledNavLinks, LogoImg } from "../styles/StyledNavBar";
import LoginForm from "./LoginForm"

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
            <LogoImg src={"./givng_logo1.png"} />
          </Link>
            {!user.isLoggedIn && (
              <>
                <StyledNavLinks style={{float:'right'}}>
                  <LoginForm user={user}/>
                </StyledNavLinks>
                {/* <StyledNavLinks style={{float:'right'}}><Link to="/register">Register</Link></StyledNavLinks> */}
                <StyledNavLinks style={{ float: "right" }}>
                  <RegisterForm />
                </StyledNavLinks>
              </>
            )}

            {user.isLoggedIn && user.currentUser && (
              <>
                <StyledNavLinks>
                    <div onClick={e => this.handleLogoutClick(e)}>
                      Logout
                    </div>
                </StyledNavLinks>
              </>
            )}
        </StyledNav>
      </div>
    );
  }
}