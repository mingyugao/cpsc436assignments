import React from 'react';
import { connect } from 'react-redux';
import {
  onChangeTitle,
  onChangeContent,
  submitPostRequest,
  submitPostSuccess,
  submitPostFailure,
  pullPostsRequest,
  pullPostsSuccess,
  pullPostsFailure
} from '../actions';

const Input = ({
  title,
  content,
  allowEdit,
  onChangeTitle,
  onChangeContent,
  submitPost
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
      onClick={() => submitPost({ title, content })}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    title: state.input.title,
    content: state.input.content,
    allowEdit: state.input.allowEdit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeTitle: title => dispatch(onChangeTitle(title)),
    onChangeContent: content => dispatch(onChangeContent(content)),
    submitPost: async post => {
      dispatch(submitPostRequest());
      const submitResponse = await fetch('/api/posts/new', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(post)
      });
      if (submitResponse.ok) {
        dispatch(submitPostSuccess());
        dispatch(pullPostsRequest());
        const pullResponse = await fetch('/api/posts');
        if (pullResponse.ok) {
          const posts = await pullResponse.json();
          dispatch(pullPostsSuccess(posts));
        } else {
          dispatch(pullPostsFailure());
        }
      } else {
        dispatch(submitPostFailure());
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
