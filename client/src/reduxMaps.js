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

export const mapStateToPropsEditPostModal = state => {
  return {
    isOpen: state.editPostModal.isOpen,
    id: state.editPostModal.id,
    title: state.editPostModal.title,
    content: state.editPostModal.content,
    isEditable: state.editPostModal.isEditable
  };
};

export const mapDispatchToPropsEditPostModal = dispatch => {
  return {
    onChangeTitle: title => dispatch(actions.editPostModalOnChangeTitle(title)),
    onChangeContent: content => {
      dispatch(actions.editPostModalOnChangeContent(content));
    },
    closeEditPostModal: () => dispatch(actions.closeEditPostModal()),
    editPostRequest: async ({ id, title, content }) => {
      dispatch(actions.editPostRequest());
      const response = await fetch(`/posts/${id}`, {
        method: 'put',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ title, content })
      });
      if (response.ok) {
        dispatch(actions.editPostSuccess());
        dispatch(actions.closeEditPostModal());
        pullPosts(dispatch);
      } else {
        dispatch(actions.editPostFailure());
      }
    }
  };
};

export const mapStateToPropsInput = state => {
  return {
    title: state.input.title,
    content: state.input.content,
    isEditable: state.input.isEditable
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
        const { id, title, content } = await response.json();
        dispatch(actions.openEditPostModal({ id, title, content }));
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
