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

    const postList = posts.reverse().map(post => {
      return (
        <Post
          key={post._id}
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
