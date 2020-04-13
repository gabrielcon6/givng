import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { useHttpClient } from '../context/http-hook';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { sendRequest } = useHttpClient();

  const [formState, setFormData] = useState(
    {
      email: '',
      password: ''
    }
  );

  const inputHandler = (e) => {
    e.preventDefault();
    setFormData({
      ...formState,
    [e.target.name]: e.target.value
    })
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState,
          name: undefined
        }
      );
    } else {
      setFormData(
        {
          ...formState,
          name: ''
        }
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };


  const authSubmitHandler = async event => {
    event.preventDefault();
    
    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/login',
          'POST',
          JSON.stringify({
            email: formState.email,
            password: formState.password
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        auth.login(responseData.isLoggedIn);
      } catch (err) {}
    } else {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/signup',
          'POST',
          JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json'
          }
        );

        auth.login(responseData.user.id);
      } catch (err) {}
    }
  };

  return (
    <div className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && <div>Name</div> }
        {!isLoginMode && (
          <input
            element="input"
            name="name"
            type="text"
            label="Your Name. Between 1 an 10 characters"
            pattern=".{1,10}" required title="1 to 5 characters"
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )} <br />
        Email <br />
        <input
          element="input"
          name="email"
          type="email"
          label="E-Mail"
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        /> <br />
        Password <br />
        <input
          element="input"
          name="password"
          type="password"
          label="Password. Between 1 an 10 characters"
          pattern=".{1,5}" required title="1 to 5 characters"
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        /> <br />
        <button type="submit" >
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </button>
      </form>
      <button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </button>
    </div>
  );
};

export default Auth;
