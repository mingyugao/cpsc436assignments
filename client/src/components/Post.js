import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsPost, mapDispatchToPropsPost } from '../reduxMaps';

const Post = ({
  id,
  title,
  content,
  edited,
  upvotes,
  openEditPostModal,
  deletePostRequest
}) => (
  <div className="post">
    <div>{title}</div>
    <div>{content}</div>
    {edited ? <div>edited</div> : ''}
    <div>{upvotes}</div>
    <button onClick={() => openEditPostModal(id)}>Edit</button>
    <button onClick={() => deletePostRequest(id)}>Delete</button>
  </div>
);

export default connect(mapStateToPropsPost, mapDispatchToPropsPost)(Post);
