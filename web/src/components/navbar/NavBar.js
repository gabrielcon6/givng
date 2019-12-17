import React, { Component } from "react";
import { Link } from "@reach/router";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import { StyledNav, StyledNavLinks, LogoImg } from "./StyledNavBar";

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
                  <RegisterForm />
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