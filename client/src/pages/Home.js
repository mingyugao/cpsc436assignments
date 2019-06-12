import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Post from '../components/Post';
import {
  pullPostsRequest,
  pullPostsSuccess,
  pullPostsFailure
} from '../actions';

const Home = ({
  posts,
  pullPostsRequest
}) => {
  pullPostsRequest();

  const postList = posts.map(post => {
    return (
      <Post
        key={post.id}
        title={post.title}
        content={post.content}
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
          {postList}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.wall.posts
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
