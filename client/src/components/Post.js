import React from 'react';
import { connect } from 'react-redux';
import {
  pullPostsRequest,
  pullPostsSuccess,
  pullPostsFailure
} from '../actions';

const Post = ({
  id,
  title,
  content,
  edited,
  upvotes,
  deletePostRequest
}) => (
  <div className="post">
    <div>{title}</div>
    <div>{content}</div>
    {edited ? <div>edited</div> : ''}
    <div>{upvotes}</div>
    <button onClick={() => deletePostRequest(id)}>Delete</button>
  </div>
);

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deletePostRequest: async id => {
      await fetch('/api/posts/delete', {
        method: 'delete',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id })
      });
      dispatch(pullPostsRequest());
      const response = await fetch('/api/posts');
      if (response.ok) {
        const posts = await response.json();
        dispatch(pullPostsSuccess(posts));
      } else {
        dispatch(pullPostsFailure());
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
