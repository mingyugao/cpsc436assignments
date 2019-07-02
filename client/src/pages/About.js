import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const About = () => (
  <div id="about">
    <Navbar />
    <div>
      This is the about page.
      Hello there.
    </div>
  </div>
);

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(About);
