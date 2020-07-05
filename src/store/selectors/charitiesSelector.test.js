import { getCharitiesState } from './charitiesSelector';
import mockState from '../mocks/mockState.json';

describe('Charities Selector', () => {
  it('should return getCharitiesState', () => {
    const selectedState = getCharitiesState(mockState);
    expect(selectedState).toEqual(mockState.charities);
  });
});