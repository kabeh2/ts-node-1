import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import SignUpForm from './components/forms/SignUpForm';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/signup' component={SignUpForm} />
        <Route path='/login' component={LoginForm} />
        <Redirect from='/' to='/signup' />
      </Switch>
    </div>
  );
}

export default App;
