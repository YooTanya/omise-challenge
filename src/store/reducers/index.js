import { combineReducers } from 'redux';
import charitiesReducer from './charitiesReducer';
import donationsReducer from './donationsReducer';
import messagesReducer from './messageReducer';
import paymentsReducer from './paymentsReducer';

const rootReducer = combineReducers({
  charities: charitiesReducer,
  donations: donationsReducer,
  messages: messagesReducer,
  payments: paymentsReducer,
});

export default rootReducer;
