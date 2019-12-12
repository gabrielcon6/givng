import React, { Component } from 'react';
import { Link } from "@reach/router"
import styled from 'styled-components';

const StyledNavBar = styled.nav`
    background-color: rgb(250, 195, 42);
    width: 100vw;
    float: right;
    height: 7vh;
`;

const StyledNavLinks = styled.p`
    color: #616161;
    float: right;
    margin: 0 1vw;
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: #603e94;
        color: white;
    }
`;

const LogoImg = styled.img`
padding: 0;
margin-top: -10vh;
margin-left: -1vw;
width: 20vw;
height: 35vh;
position: absolute;

`
export default class NavBar extends Component {

    handleLogoutClick(event) {
        event.preventDefault();
        this.props.user.logout();
    }

    render() {

        const user = this.props.user;
    
        return (
            <div>
                <Link to="/dashboard"><LogoImg src={"./givng_logo.png"}/></Link>
                <StyledNavBar>
                    <StyledNavLinks>Logout</StyledNavLinks>
                    <StyledNavLinks>Special Dates</StyledNavLinks>
                    <StyledNavLinks>Favourite Friends</StyledNavLinks>

                    { !user.isLoggedIn &&
                        <>
                            <StyledNavLinks style={{float:'right'}}><Link to="/">Login</Link></StyledNavLinks>
                            <StyledNavLinks style={{float:'right'}}><Link to="/register">Register</Link></StyledNavLinks>
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