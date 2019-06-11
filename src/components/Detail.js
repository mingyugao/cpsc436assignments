import React, { Component } from 'react';
import {connect} from 'react-redux';

class Detail extends Component {
  render() {
    const selected = this.props.selected;
    return selected
      ? (
          <div id='detail' className='container'>
            <h3>{selected}</h3>
            <p>{selected}</p>
          </div>
        )
      : <div></div>;
  }
}

const mapStateToProps = state => {
  return {selected: state.selected};
};

export default connect(mapStateToProps, {
})(Detail);
