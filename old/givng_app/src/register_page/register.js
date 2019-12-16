import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { navigate } from '@reach/router';
import axios from 'axios';
import { SERVER_URL } from "../config";

export default class RegisterPage extends React.Component {

    handleSignup(data) {
        axios.post(`${ SERVER_URL }/api/users`, {
            user: {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            }
        }).then(response => {

            // TODO: use a toast service, or modal or something
            // better than an allert.
            alert('user successfully created, please login');

            // Navigate to the home page.
            navigate('/');

        });
    }

    handleCancelSignup() {
        // Navigate to the home page.
        navigate('/');
    }

    render() {
        return (<>
            <RegisterForm
                onSignup={(data) => this.handleSignup(data)}
                onCancelClick={() => this.handleCancelSignup()}
            >               
            </RegisterForm>
        </>)
    }
}