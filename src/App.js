import { useDispatch, useSelector } from 'react-redux';
import { getCharities, getPayments } from './store/actions';
import { getMessageState, getDonationState } from './store/selectors';
import { Landing } from './components/pages/Landing';
import Message from './components/shared/Message';
import React, { useEffect } from 'react';
import Theme from './styles/Theme';
import Typography from './components/shared/Typography';

const root = {
  margin: '5rem',
}


const App = () => {
  const dispatch = useDispatch();
  const message = useSelector(getMessageState);
  // const donation = useSelector(getDonationState);

  useEffect(() => {
    dispatch(getCharities());
    dispatch(getPayments());
  },[dispatch]);

  return (
    <Theme>
      <div style={root}>
        <Typography alignText="center" variant="title">Omise Tamboon React</Typography>
        {/* <Typography alignText="center" variant="subtitle">All donations: {donation}</Typography> */}
        {message?.success && <Message success>{message.success}</Message>}
        {message?.error && <Message failed>{message.error}</Message>}
        <Landing />
      </div>
    </Theme>
  );
};

export default App;
