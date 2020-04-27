import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'

import Login from './components/Login';
import  App from './App.js'


export default function Routes(appProps) {
  console.error('should not see this');
  return (
    <HashRouter>
        <Switch>
          <Route path='/login'   component={ Login } />
        </Switch>
    </HashRouter>
  );
}