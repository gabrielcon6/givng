import React from 'react';
import { Login, LoginTriangle, LoginHeader, LoginContainer, P, Input, BottomButtons } from "./StyledForm";

export default class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    }

    onSignupClick() {
        // TODO: validate inputs
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
            <LoginHeader>Sign Up</LoginHeader>
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
                /></P>
    
                <div className="clearfix">
                <P><BottomButtons type="submit" value="Register" className="loginBtn" onClick={() => this.onSignupClick() }></BottomButtons></P>
                <P><BottomButtons type="submit" value="Close"onClick={this.props.onHide}></BottomButtons></P>
                </div>
            </LoginContainer>
        </Login>
);
    }
}