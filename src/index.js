import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MasterPage from './main/MasterPage'
import Home from './main/home/Home'
import LeftNav from './sideNav/LeftNav'
import Login from './main/login/Login'
import Signup from './main/signup/Signup'

render((
  <Router history={hashHistory}>
    <Route path="/" component={MasterPage}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('app'))
