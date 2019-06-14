import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsPost, mapDispatchToPropsPost } from '../reduxMaps';

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

export default connect(mapStateToPropsPost, mapDispatchToPropsPost)(Post);
