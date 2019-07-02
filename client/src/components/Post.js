import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsPost, mapDispatchToPropsPost } from '../reduxMaps';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: true,
      upvotes: this.props.upvotes
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.upvotePost = this.upvotePost.bind(this);
  }

  toggleExpanded() {
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  upvotePost() {
    fetch(`posts/${this.props.id}/votes`, { method: 'put' });
    this.setState({ upvotes: this.state.upvotes + 1 });
  }

  render() {
    const {
      id,
      title,
      content,
      edited,
      // upvotes,
      openEditPostModal,
      deletePostRequest
    } = this.props;
    const { upvotes } = this.state;

    return this.state.isExpanded
      ? (
        <div className="post">
          <h3 onClick={() => this.toggleExpanded()}>{title}</h3>
          <div>{content}</div>
          {edited ? <div>(Edited)</div> : <div></div>}
          <div>{upvotes} upvotes</div>
          <span>
            [<button onClick={() => this.upvotePost()}>Upvote</button>]
          </span>
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
