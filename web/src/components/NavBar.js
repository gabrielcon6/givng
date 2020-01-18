import React from "react";
import { Link } from "@reach/router";
import RegisterForm from "./RegisterForm";
import { StyledNav, StyledNavLinks, LogoImg } from "../styles/StyledNavBar";
import Login from "./Login"
import Logout from "./Logout"

const navBar = (props) => {

  const user = props.user;

  return (
    <div>
      <StyledNav>
        <Link to="/">
          <LogoImg src={"./givng_logo1.png"} />
        </Link>
          {!user.isLoggedIn && (
            <>
              <StyledNavLinks style={{ float: "right" }}>
                <RegisterForm />
              </StyledNavLinks>
              <StyledNavLinks style={{float:'right'}}>
                <Login user={user}/>
              </StyledNavLinks>


            </>
          )}

          {user.isLoggedIn && user.currentUser && (
            <>
              <StyledNavLinks style={{float:'right'}}>
                <Logout user={user} />
              </StyledNavLinks>
            </>
          )}
      </StyledNav>
    </div>
  );
  }


export default navBar;