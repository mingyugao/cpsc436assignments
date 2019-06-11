import React, { Component } from 'react';
import {connect} from 'react-redux';
import {navigateToPage} from '../actions';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-links'>
          <h1 onClick={() => this.props.navigateToPage('home')}>
            Home
          </h1>
          <h1 onClick={() => this.props.navigateToPage('about')}>
            About
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {page: state.page};
};

export default connect(mapStateToProps, {
  navigateToPage
})(Navbar);
