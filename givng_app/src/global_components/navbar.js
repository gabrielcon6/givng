
import React from 'react';
import { Link } from "@reach/router"
import styled from 'styled-components';

export default class NavBar extends React.Component {

    handleLogoutClick(event) {
        event.preventDefault();
        this.props.user.logout();
    }

    render() {

        const NavBar = styled.nav`
        background-color: white;
        `

        const user = this.props.user;
    
        return (
        <div className="app-nav-bar">
            <ul>
                <li><span className="app-nav-brand">My App</span></li>
                <li><Link to="/dashboard">Dashboard</Link></li>

                { !user.isLoggedIn &&
                    <>
                        <li style={{float:'right'}}><Link to="/">Login</Link></li>
                        <li style={{float:'right'}}><Link to="/register">Register</Link></li>
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
            </ul>
        </div>);
    }
}