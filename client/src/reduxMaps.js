import * as actions from './actions';

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
        dispatch(actions.editPostSuccess({ id, title, content }));
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
        const post = await response.json();
        dispatch(actions.submitPostSuccess(post));
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
    openEditPostModal: id => {
      dispatch(actions.openEditPostModal(id));
    },
    deletePostRequest: async id => {
      await fetch(`/posts/${id}`, {
        method: 'delete'
      });
      dispatch(actions.deletePost(id));
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
      dispatch(actions.pullPostsRequest());
      const response = await fetch('/posts');
      if (response.ok) {
        const posts = await response.json();
        dispatch(actions.pullPostsSuccess(posts));
      } else {
        dispatch(actions.pullPostsFailure());
      }
    }
  };
};
