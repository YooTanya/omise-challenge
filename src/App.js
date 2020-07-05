import { useDispatch, useSelector } from 'react-redux';
import { getCharities, getPayments } from './store/actions';
import { getMessageState, getDonationState } from './store/selectors';
import { Landing } from './components/pages/Landing';
import Message from './components/shared/Message';
import React, { useEffect } from 'react';
import Theme from './styles/Theme';
import Typography from './components/shared/Typography';
import { Grid, Box } from 'react-raster';

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
      <Grid 
        breakpoints={[0, 432, 768, 1024, 1200, 1400]} 
        left={['3vw', '3vw', '3vw', '2vw']}
        right={['3vw', '3vw', '3vw', '2vw']}
        style={root}
        top={'2vw'}>
        <Box cols={12}>
          <Typography alignText="center" variant="title">Omise Tamboon React</Typography>
          {/* <Typography alignText="center" variant="subtitle">All donations: {donation}</Typography> */}
          {message?.success && <Message success>{message.success}</Message>}
          {message?.error && <Message failed>{message.error}</Message>}
          <Landing />
        </Box>
      </Grid>
    </Theme>
  );
};

export default App;
