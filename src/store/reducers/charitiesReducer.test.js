import charitiesReducer from './charitiesReducer';

describe('Charities Reducer', () => {
  const initialState = {};
  const mockData = [
    {
      id: 1,
      name: 'Baan Kru Noi',
      image: 'baan-kru-noi.jpg',
      currency: 'THB',
    },
  ];

  it('should update data to charities state', () => {
    expect(
      charitiesReducer(initialState, {
        type: 'GET_CHARITIES', 
        payload: mockData,
      }),
    ).toEqual({charities: mockData});
  });

  it('should reset charities state to initial state', () => {
    expect(
      charitiesReducer(initialState, {type: 'RESET_CHARITIES'}),
    ).toEqual(initialState);
  });

  it('should not change charities state when calling with no type defined', () => {
    expect(
      charitiesReducer(initialState, {type: 'NO_CHARITIES'}),
    ).toEqual({});
  });
});
