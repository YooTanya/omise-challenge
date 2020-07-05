import { getDonationState } from './donationSelector';
import mockState from '../mocks/mockState.json';

describe('Donation Selector', () => {
  it('should return getDonationState', () => {
    const selectedState = getDonationState(mockState);
    expect(selectedState).toEqual(mockState.donations);
  });
});