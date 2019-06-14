import { combineReducers } from 'redux';

const wallReducer = (
  state = {
    posts: [],
    isLoading: false
  },
  action
) => {
  switch (action.type) {
    case 'PULL_POSTS_REQUEST':
      return {
        ...state,
        isLoading: true
      };
    case 'PULL_POSTS_SUCCESS':
      return {
        posts: action.payload,
        isLoading: false
      };
    case 'PULL_POSTS_FAILURE':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

const editPostModalReducer = (
  state = {
    isOpen: false,
    title: '',
    content: ''
  },
  action
) => {
  switch (action.type) {
    case 'OPEN_EDIT_POST_MODAL':
      return {
        isOpen: true,
        ...action.payload
      };
    case 'CLOSE_EDIT_POST_MODAL':
      return {
        isOpen: false,
        title: '',
        content: ''
      };
    default:
      return state;
  }
};

const inputReducer = (
  state = {
    title: '',
    content: '',
    allowEdit: true
  },
  action
) => {
  switch (action.type) {
    case 'ON_CHANGE_TITLE':
      return {
        ...state,
        title: action.payload
      };
    case 'ON_CHANGE_CONTENT':
      return {
        ...state,
        content: action.payload
      };
    case 'SUBMIT_POST_REQUEST':
      return {
        ...state,
        allowEdit: false
      };
    case 'SUBMIT_POST_SUCCESS':
      return {
        title: '',
        content: '',
        allowEdit: true
      };
    case 'SUBMIT_POST_FAILURE':
      return {
        ...state,
        allowEdit: true
      };
    default:
      return state;
  }
};

export default combineReducers({
  wall: wallReducer,
  editPostModal: editPostModalReducer,
  input: inputReducer
});
