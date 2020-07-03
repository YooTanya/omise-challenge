const initialState = {};

function charitiesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'GET_CHARITIES':
      return { charities: payload };
    case 'RESET_CHARITIES':
      return initialState;
    default:
      return state;
  }
}

export default charitiesReducer;
