import messageReducer from './messageReducer';

describe('Message Reducer', () => {
  const initialState = {};
  const mockSuccessData = 'Thank you for your donation';
  const mockFailedData = 'Donation is not successful. Please try again later.';

  it('should update messages state with success response', () => {
    expect(messageReducer(initialState, { type: 'GET_SUCCESS_MESSAGE', payload: mockSuccessData })).toEqual({success: mockSuccessData});
  });

  it('should update messages state with error response', () => {
    expect(messageReducer(initialState, { type: 'GET_ERROR_MESSAGE', payload: mockFailedData })).toEqual({error: mockFailedData});
  });

  it('should reset success messages state', () => {
    expect(messageReducer(initialState, { type: 'RESET_SUCCESS_MESSAGE' })).toEqual({success: ''});
  });

  it('should reset error messages state', () => {
    expect(messageReducer(initialState, { type: 'RESET_ERROR_MESSAGE' })).toEqual({error: ''});
  });

  it('should reset messages state to intitial state', () => {
    expect(messageReducer(initialState, { type: 'RESET_MESSAGE_STATE' })).toEqual(initialState);
  });

  it('should not update messages state when calling with no type defined', () => {
    expect(messageReducer(initialState, { type: 'NO_MESSAGE_STATE' })).toEqual({});
  });
});
