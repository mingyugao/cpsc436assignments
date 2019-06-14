import * as actions from './actions';

const pullPosts = async dispatch => {
  dispatch(actions.pullPostsRequest());
  const response = await fetch('/api/posts');
  if (response.ok) {
    const posts = await response.json();
    dispatch(actions.pullPostsSuccess(posts));
  } else {
    dispatch(actions.pullPostsFailure());
  }
};

export const mapStateToProps = state => {
  return {
    title: state.input.title,
    content: state.input.content,
    allowEdit: state.input.allowEdit
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onChangeTitle: title => dispatch(actions.onChangeTitle(title)),
    onChangeContent: content => dispatch(actions.onChangeContent(content)),
    submitPostRequest: async post => {
      dispatch(actions.submitPostRequest());
      const response = await fetch('/api/posts/new', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(post)
      });
      if (response.ok) {
        dispatch(actions.submitPostSuccess());
        await pullPosts(dispatch);
      } else {
        dispatch(actions.submitPostFailure());
      }
    }
  };
};

export const mapStateToPropsPost = state => {
  return {};
};

export const mapDispatchToPropsPost = dispatch => {
  return {
    deletePostRequest: async id => {
      await fetch('/api/posts/delete', {
        method: 'delete',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id })
      });
      await pullPosts(dispatch);
    }
  };
};

export const mapStateToPropsHome = state => {
  return {
    posts: state.wall.posts,
    isLoading: state.wall.isLoading
  };
};

export const mapDispatchToPropsHome = dispatch => {
  return {
    pullPostsRequest: async () => {
      await pullPosts(dispatch);
    }
  };
};
