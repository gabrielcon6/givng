import React from 'react';

export default class LoginForm extends React.Component {

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

    render() {
        return (
            <div className="container">
                <h1>Login</h1>

                
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required
                    value={this.state.email} onChange={this.handleEmailChange}  />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required 
                    value={this.state.password} onChange={this.handlePasswordChange} />

                <div className="clearfix">
                    <button className="loginBtn" onClick={() => this.onLoginClick() }>Login Up</button>
                </div>
            </div>);
    }
}