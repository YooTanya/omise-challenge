import paymentsReducer from './paymentsReducer';

describe('Payment Reducer', () => {
  const initialState = {};
  const mockData = [
    {
      charitiesId: 1,
      amount: 20,
      currency: 'THB',
      id: 2,
    },
  ];

  it('should update data to payments state', () => {
    expect(
      paymentsReducer(initialState, {
        type: 'GET_PAYMENTS', 
        payload: mockData,
      }),
    ).toEqual({payments: mockData});
  });

  it('should reset payments state to initial state', () => {
    expect(
      paymentsReducer(initialState, {type: 'RESET_PAYMENTS'}),
    ).toEqual(initialState);
  });

  it('should not change payments state when calling with no type defined', () => {
    expect(
      paymentsReducer(initialState, {type: 'NO_PAYMENTS'}),
    ).toEqual({});
  });
});
