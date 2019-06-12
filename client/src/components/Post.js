import React from 'react';
import { connect } from 'react-redux';

const Post = ({
  title,
  content
}) => (
  <div className="post">
    <div>{title}</div>
    <div>{content}</div>
  </div>
);

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(Post);
