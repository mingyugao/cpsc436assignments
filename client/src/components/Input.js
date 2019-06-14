import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsInput, mapDispatchToPropsInput } from '../reduxMaps';

const Input = ({
  title,
  content,
  allowEdit,
  onChangeTitle,
  onChangeContent,
  submitPostRequest
}) => (
  <div className="input">
    <input
      disabled={!allowEdit}
      type="text"
      value={title}
      onChange={e => onChangeTitle(e.target.value)}
      placeholder="Title"
    />
    <input
      disabled={!allowEdit}
      type="text"
      value={content}
      onChange={e => onChangeContent(e.target.value)}
      placeholder="Message"
    />
    <input
      disabled={!allowEdit}
      type="button"
      value="Post"
      onClick={() => submitPostRequest({ title, content })}
    />
  </div>
);

export default connect(mapStateToPropsInput, mapDispatchToPropsInput)(Input);
