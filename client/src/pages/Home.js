import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Post from '../components/Post';
import EditPostModal from '../components/EditPostModal';
import { mapStateToPropsHome, mapDispatchToPropsHome } from '../reduxMaps';

class Home extends Component {
  componentDidMount() {
    this.props.pullPostsRequest();
  }

  render() {
    const { posts, isLoading } = this.props;

    const postList = posts.sort((a, b) => {
      return a._id < b._id
        ? 1
        : -1;
    }).map((post, index) => {
      return (
        <Post
          key={index}
          id={post._id}
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
        <EditPostModal />
      </div>
    );
  }
}

export default connect(mapStateToPropsHome, mapDispatchToPropsHome)(Home);
