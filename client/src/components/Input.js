import React from 'react';
import { connect } from 'react-redux';
import { onChangeTitle, onChangeContent, submitPost } from '../actions';

const Input = ({
  title,
  content,
  onChangeTitle,
  onChangeContent,
  submitPost
}) => (
  <div className="input">
    <input
      type="text"
      value={title}
      onChange={e => onChangeTitle(e.target.value)}
      placeholder="Title"
    />
    <input
      type="text"
      value={content}
      onChange={e => onChangeContent(e.target.value)}
      placeholder="Message"
    />
    <input
      type="button"
      value="Post"
      onClick={() => submitPost({ title, content })}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    title: state.input.title,
    content: state.input.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeTitle: title => dispatch(onChangeTitle(title)),
    onChangeContent: content => dispatch(onChangeContent(content)),
    submitPost: post => dispatch(submitPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
