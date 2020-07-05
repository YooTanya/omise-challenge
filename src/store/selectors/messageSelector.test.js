import { getMessageState } from './messageSelector';
import mockState from '../mocks/mockState.json';

describe('Message Selector', () => {
  it('should return getMessageState', () => {
    const selectedState = getMessageState(mockState);
    expect(selectedState).toEqual(mockState.messages);
  });
});