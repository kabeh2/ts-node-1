import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import SignUpForm from './components/forms/SignUpForm';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/signup' component={SignUpForm} />
        <Route path='/login' component={LoginForm} />
        <Redirect from='/' to='/signup' />
      </Switch>
    </div>
  );
}

export default App;
