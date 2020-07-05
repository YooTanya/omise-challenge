import { getPaymentState } from './paymentsSelector';
import mockState from '../mocks/mockState.json';

describe('Payment Selector', () => {
  it('should return getPaymentState', () => {
    const selectedState = getPaymentState(mockState);
    expect(selectedState).toEqual(mockState.payments);
  });
});