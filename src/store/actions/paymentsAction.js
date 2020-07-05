import fetch from 'isomorphic-fetch';
import { summaryDonations } from '../../helpers';
import { getErrorMessage, getSuccessMessage, resetSuccessMessage, resetErrorMessage } from './messageAction';
import { updateTotalDonation } from './donationsAction';

export function getPayments() {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/payments');
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        dispatch({
          type: 'GET_PAYMENTS',
          payload: data,
        });
        dispatch(updateTotalDonation(summaryDonations(data.map((item) => item.amount || 0))));
      } else {
        throw new Error('Cannot receive a payment data');
      }
    } catch (e) {
      dispatch(getErrorMessage(e.message));
      setTimeout(() => dispatch(resetErrorMessage()), 5000);
    }
  };
}

export function makePayments(charitiesId, amount, currency) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('http://localhost:3001/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ charitiesId, amount, currency }),
      });
      if (response.status >= 200 && response.status < 300) {
        dispatch(getSuccessMessage(`Thanks for donate ${amount}!`));
        dispatch(updateTotalDonation(amount + getState().donations));
        setTimeout(() => dispatch(resetSuccessMessage()), 2000);
      } else {
        throw new Error('Cannot make a payment');
      }
    } catch (e) {
      dispatch(getErrorMessage(e.message));
      setTimeout(() => dispatch(resetErrorMessage()), 5000);
    }
  };
}

export function resetPayments() {
  return { type: 'RESET_PAYMENTS' };
}
