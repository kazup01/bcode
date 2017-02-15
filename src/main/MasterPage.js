import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import '../App.css'

export default React.createClass({
  render(){
    return(
      <div className="container">
        <ul className="no-li-indent" id="list">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})
