import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Friends  from './components/Friends';
import  Login  from './Login/Login';

export const App = () => {
  
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
            <Redirect to="/login" />
          )
      }
    />
  );
  return (
    <div>
        
        <Route exact path='/login' render={(props) => <Login {...props} />} />
        <PrivateRoute exact path='/friends' component={Friends} />
      </div>
    )
}


