import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = () => (
  <div className="navbar">
    <NavLink activeClassName="selected" exact to="/">Home</NavLink>
    <NavLink activeClassName="selected" to="/about">About</NavLink>
  </div>
);

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Navbar);
