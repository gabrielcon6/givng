import React from 'react';
import LoginForm from './loginForm';

export default class Landing extends React.Component {
          
    handleLoginClick(email, password) {
        this.props.user.login(email, password);
    }

    render() {
        return (<>
            <LoginForm login={(email, pass)=>this.handleLoginClick(email, pass)}></LoginForm>
        </>)
    }
}