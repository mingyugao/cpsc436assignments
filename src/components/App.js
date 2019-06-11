import React, { Component } from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Page from './Page';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Page page={this.props.page} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {page: state.page};
};

export default connect(mapStateToProps, {
})(App);
