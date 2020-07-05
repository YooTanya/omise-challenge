import donationsReducer from './donationsReducer';

describe('Donations Reducer', () => {
  const initialState = 0;
  const mockData = 100;

  it('should update donations state', () => {
    expect(donationsReducer(initialState, { type: 'UPDATE_TOTAL_DONATE', payload: mockData })).toBe(100);
  });

  it('should reset donations state', () => {
    expect(
      donationsReducer(initialState, {
        type: 'RESET_TOTAL_DONATE',
      }),
    ).toEqual(initialState);
  });

  it('should not change donations state when calling with no type defined', () => {
    expect(
      donationsReducer(initialState, {
        type: 'NO_TOTAL_DONATE',
      }),
    ).toEqual(0);
  });
});
