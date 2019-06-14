import * as actions from './actions';

const pullPosts = async dispatch => {
  dispatch(actions.pullPostsRequest());
  const response = await fetch('/posts');
  if (response.ok) {
    const posts = await response.json();
    dispatch(actions.pullPostsSuccess(posts));
  } else {
    dispatch(actions.pullPostsFailure());
  }
};

export const mapStateToPropsInput = state => {
  return {
    title: state.input.title,
    content: state.input.content,
    allowEdit: state.input.allowEdit
  };
};

export const mapDispatchToPropsInput = dispatch => {
  return {
    onChangeTitle: title => dispatch(actions.onChangeTitle(title)),
    onChangeContent: content => dispatch(actions.onChangeContent(content)),
    submitPostRequest: async post => {
      dispatch(actions.submitPostRequest());
      const response = await fetch('/posts', {
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
    openEditPostModal: async id => {
      const response = await fetch(`/posts/${id}`);
      if (response.ok) {
        const { title, content } = await response.json();
        dispatch(actions.openEditPostModal({ title, content }));
      }
    },
    deletePostRequest: async id => {
      await fetch(`/posts/${id}`, {
        method: 'delete'
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
