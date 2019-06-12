export const pullPostsRequest = () => {
  return {
    type: 'PULL_POSTS_REQUEST'
  };
};

export const pullPostsSuccess = posts => {
  return {
    type: 'PULL_POSTS_SUCCESS',
    payload: posts
  };
};

export const pullPostsFailure = () => {
  return {
    type: 'PULL_POSTS_FAILURE'
  };
};

export const onChangeTitle = title => {
  return {
    type: 'ON_CHANGE_TITLE',
    payload: title
  };
};

export const onChangeContent = content => {
  return {
    type: 'ON_CHANGE_CONTENT',
    payload: content
  };
};

export const submitPostRequest = () => {
  return {
    type: 'SUBMIT_POST_REQUEST'
  };
};

export const submitPostSuccess = () => {
  return {
    type: 'SUBMIT_POST_SUCCESS'
  };
};

export const submitPostFailure = () => {
  return {
    type: 'SUBMIT_POST_FAILURE'
  };
};
