import React, { useState, useCallback, useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import GivngsPage from './pages/givngs/GivngsPage'
import Auth from './pages/Auth';
import { AuthContext } from './context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = useContext(AuthContext);
  
  const login = useCallback(() => {
    auth.isLoggedIn = true;
    setIsLoggedIn(true);
  }, []);
 
  const logout = useCallback(() => {
    auth.isLoggedIn = false;
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (auth.isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/dashboard" exact>
          <GivngsPage />
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
    <Router>
      {/* <NavLink to="/auth">SIGN IN</NavLink> */}
      <main>{routes}</main>
    </Router>
    </AuthContext.Provider>
  );
};

export default App;
