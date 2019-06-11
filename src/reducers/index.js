import {combineReducers} from 'redux';

const pageReducer = (page = 'home', action) => {
  if (action.type === 'NAVIGATE_TO_PAGE') {
    return action.payload;
  }
  return page;
};

const inputReducer = (inputValue = '', action) => {
  if (action.type === 'SUBMIT_MESSAGE') {
    return '';
  }
  if (action.type === 'UPDATE_INPUT') {
    return action.payload
  }
  if (action.type === 'CLEAR_INPUT') {
    return '';
  }
  return inputValue;
};

const messagesReducer = (
  messagesState = {
    messages: [
      `Hemllo`,
      `It's me`,
      `I was wondering if after all these years`,
      `You'd like to meet to go over everything`
    ],
    display: true
  },
  action
) => {
  if (action.type === 'SET_DISPLAY') {
    return {...messagesState, display: action.payload};
  }
  if (action.type === 'SUBMIT_MESSAGE') {
    const newState = {...messagesState};
    if (action.payload) newState.messages.unshift(action.payload);
    return newState;
  }
  if (action.type === 'DELETE_ITEM') {
    return {
      ...messagesState,
      messages: messagesState.messages.filter((m) => m !== action.payload)
    };
  }
  return messagesState;
};

const detailReducer = (selected = '', action) => {
  if (action.type === 'SELECT_ITEM') {
    return action.payload;
  }
  if (action.type === 'DELETE_ITEM') {
    return '';
  }
  return selected;
};

export default combineReducers({
  page: pageReducer,
  inputValue: inputReducer,
  messages: messagesReducer,
  selected: detailReducer
});
