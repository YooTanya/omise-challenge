const initialState = 0;

function donationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_TOTAL_DONATE':
      return payload;
    case 'RESET_TOTAL_DONATE':
      return initialState;
    default:
      return state;
  }
}

export default donationReducer;
