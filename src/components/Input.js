import React, { Component } from 'react';
import {connect} from 'react-redux';
import {submitMessage, updateInput, clearInput} from '../actions';

class Input extends Component {
  render() {
    return (
      <div className='container'>
        <form id='message-form'>
          <h3>Contribute a new message:</h3>
          <div>
            <input
              name='message'
              type='text'
              value={this.props.inputValue}
              onChange={e => this.props.updateInput(e.target.value)}
              placeholder='Compose your message'
            />
            <input
              className='button'
              type='button'
              value='Submit'
              onClick={() => this.props.submitMessage(this.props.inputValue)}
            />
            <input
              className='button'
              type='button'
              value='Clear'
              onClick={() => this.props.clearInput()}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {inputValue: state.inputValue};
};

export default connect(mapStateToProps, {
  submitMessage,
  updateInput,
  clearInput
})(Input);
