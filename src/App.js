import { useDispatch, useSelector } from 'react-redux';
import { getCharities, getPayments } from './store/actions';
import { getMessageState, getDonationState } from './store/selectors';
import { Landing } from './components/pages/Landing';
import Message from './components/shared/Message';
import React, { useEffect } from 'react';
import Theme from './styles/Theme';
import Typography from './components/shared/Typography';
import Sticky from './components/shared/Sticky';
import { Grid, Box } from 'react-raster';

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector(getMessageState);
  const donation = useSelector(getDonationState);

  useEffect(() => {
    dispatch(getCharities());
    dispatch(getPayments());
  },[dispatch]);

  return (
    <Theme>
      <Grid 
        breakpoints={[0, 432, 768, 1024, 1200, 1400]} 
        left={['3rem', '3rem', '3rem', '2rem']}
        right={['3rem', '3rem', '3rem', '2rem']}
        style={root}
        top={'2rem'}>
        <Box cols={12}>
          <Typography alignText="center" variant="title">Omise Tamboon React</Typography>
          {message?.success && <Message success>{message.success}</Message>}
          {message?.error && <Message failed>{message.error}</Message>}
          <Landing />
        </Box>
      </Grid>
      <Sticky>
        <Typography>All donation: {donation || 0}</Typography>
      </Sticky>
    </Theme>
  );
};

export default App;
