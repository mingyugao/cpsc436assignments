import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsInput, mapDispatchToPropsInput } from '../reduxMaps';

const Input = ({
  title,
  content,
  isEditable,
  onChangeTitle,
  onChangeContent,
  submitPostRequest
}) => (
  <div className="input">
    <div>Create a post</div>
    <input
      disabled={!isEditable}
      type="text"
      value={title}
      onChange={e => onChangeTitle(e.target.value)}
      placeholder="Title"
    />
    <textarea
      disabled={!isEditable}
      cols="40"
      rows="5"
      value={content}
      onChange={e => onChangeContent(e.target.value)}
      placeholder="Text"
    ></textarea>
    <button
      disabled={!isEditable || !title || !content}
      onClick={() => submitPostRequest({ title, content })}
    >POST</button>
  </div>
);

export default connect(mapStateToPropsInput, mapDispatchToPropsInput)(Input);
