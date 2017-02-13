import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import MasterPage from './components/MasterPage'
import Counter from './components/Counter'
import Home from './components/Home'
import Search from './components/Search'
import Login from './components/Login'
import Signup from './components/Signup'

render((
  <Router history={hashHistory}>
    <Route path="/" component={MasterPage}>
      <IndexRoute component={Home} />
      <Route path="counter" component={Counter} />
      <Route path="search" component={Search} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('app'))
