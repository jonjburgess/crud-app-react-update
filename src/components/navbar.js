import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/posts">Posts</NavLink>
        <NavLink exact to="/new">New</NavLink>
      </nav>
    );
  }
}

export default Navbar;
