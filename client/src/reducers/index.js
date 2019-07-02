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
    id: null,
    title: '',
    content: '',
    isEditable: true
  },
  action
) => {
  switch (action.type) {
    case 'OPEN_EDIT_POST_MODAL':
      return {
        ...state,
        isOpen: true,
        ...action.payload
      };
    case 'CLOSE_EDIT_POST_MODAL':
      return {
        isOpen: false,
        id: null,
        title: '',
        content: '',
        isEditable: true
      };
    case 'EDIT_POST_MODAL_ON_CHANGE_TITLE':
      return {
        ...state,
        title: action.payload
      };
    case 'EDIT_POST_MODAL_ON_CHANGE_CONTENT':
      return {
        ...state,
        content: action.payload
      };
    case 'EDIT_POST_REQUEST':
      return {
        ...state,
        isEditable: false
      };
    case 'EDIT_POST_SUCCESS':
      return state;
    case 'EDIT_POST_FAILURE':
      return {
        ...state,
        isEditable: true
      };
    default:
      return state;
  }
};

const inputReducer = (
  state = {
    title: '',
    content: '',
    isEditable: true
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
        isEditable: false
      };
    case 'SUBMIT_POST_SUCCESS':
      return {
        title: '',
        content: '',
        isEditable: true
      };
    case 'SUBMIT_POST_FAILURE':
      return {
        ...state,
        isEditable: true
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
