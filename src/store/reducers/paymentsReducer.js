const initialState = {};

function paymentsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PAYMENTS':
      return { payments: payload };
    case 'RESET_PAYMENTS':
      return initialState;
    default:
      return state;
  }
}

export default paymentsReducer;
