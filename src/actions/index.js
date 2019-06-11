export const navigateToPage = page => {
  return {
    type: 'NAVIGATE_TO_PAGE',
    payload: page
  };
};

export const submitMessage = message => {
  return {
    type: 'SUBMIT_MESSAGE',
    payload: message
  };
};

export const updateInput = value => {
  return {
    type: 'UPDATE_INPUT',
    payload: value
  };
};

export const clearInput = () => {
  return {
    type: 'CLEAR_INPUT'
  };
};

export const setDisplay = toggle => {
  return {
    type: 'SET_DISPLAY',
    payload: toggle
  };
};

export const selectItem = item => {
  return {
    type: 'SELECT_ITEM',
    payload: item
  };
};

export const deleteItem = item => {
  return {
    type: 'DELETE_ITEM',
    payload: item
  };
};
