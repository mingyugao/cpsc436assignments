import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Post from '../components/Post';
import {
  pullPostsRequest,
  pullPostsSuccess,
  pullPostsFailure
} from '../actions';

class Home extends Component {
  componentDidMount() {
    this.props.pullPostsRequest();
  }

  render() {
    const {
      posts,
      isLoading,
      pullPostsRequest
    } = this.props;

    const postList = posts.sort((a, b) => b.id - a.id).map(post => {
      return (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          edited={post.edited}
          upvotes={post.upvotes}
        />
      );
    });

    return (
      <div id="home">
        <Navbar />
        <div>
          <Input />
          <div>
            {isLoading ? <div>Loading...</div> : postList}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.wall.posts,
    isLoading: state.wall.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pullPostsRequest: async () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
