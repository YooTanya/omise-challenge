const initialState = {};

function messageReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'GET_SUCCESS_MESSAGE':
      return { state, success: payload };
    case 'RESET_SUCCESS_MESSAGE':
      return { state, success: '' };
    case 'GET_ERROR_MESSAGE':
      return { state, error: payload };
    case 'RESET_ERROR_MESSAGE':
      return { state, error: '' };
    case 'RESET_MESSAGE_STATE':
      return initialState;
    default:
      return state;
  }
}

export default messageReducer;
