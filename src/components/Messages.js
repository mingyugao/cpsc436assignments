import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setDisplay, selectItem, deleteItem} from '../actions';

class Messages extends Component {
  render() {
    const messages = this.props.messages.messages;
    return (
      <div className='container'>
        <div id='buttons-container'>
          <button onClick={() => this.props.setDisplay(true)}>Show</button>
          <button onClick={() => this.props.setDisplay(false)}>Hide</button>
        </div>
        <div id='messages-container'>
          {
            this.props.messages.display
              ? messages.map((message, i) => {
                return (
                  <div
                    key={i}
                    className='message'
                    onClick={() => this.props.selectItem(message)}
                  >
                    <div>{message}</div>
                    <button
                      className='delete-button'
                      onClick={(e) => {
                        e.stopPropagation();
                        this.props.deleteItem(message);
                      }}
                    >
                      X
                    </button>
                  </div>
                );
              })
              : <div></div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {messages: state.messages};
};

export default connect(mapStateToProps, {
  setDisplay,
  selectItem,
  deleteItem
})(Messages);
