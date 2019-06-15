import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsPost, mapDispatchToPropsPost } from '../reduxMaps';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: true };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const {
      id,
      title,
      content,
      edited,
      upvotes,
      openEditPostModal,
      deletePostRequest
    } = this.props;

    return this.state.isExpanded
      ? (
        <div className="post">
          <h3 onClick={() => this.toggleExpanded()}>{title}</h3>
          <div>{content}</div>
          {edited ? <div>(Edited)</div> : <div></div>}
          <div>{upvotes} upvotes</div>
          <span>
            [<button onClick={() => openEditPostModal(id)}>Edit</button>]
          </span>
          <span>
            [<button onClick={() => deletePostRequest(id)}>Delete</button>]
          </span>
        </div>
      )
      : (
        <div className="post">
          <h3 onClick={() => this.toggleExpanded()}>{title}</h3>
        </div>
      );
  }
}

export default connect(mapStateToPropsPost, mapDispatchToPropsPost)(Post);
