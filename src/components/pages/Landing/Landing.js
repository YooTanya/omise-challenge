import React from 'react';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getCharitiesState } from '../../../store/selectors';
import { Grid, Box } from 'react-raster';

const root = {
  marginTop: '3rem',
};

const Landing = () => {
  const charities = useSelector(getCharitiesState);

  return (
    <Grid breakpoints={[0, 432, 768, 1024, 1200, 1400]} colspan={12} gutterX={'2vw'} gutterY={'2vw'} style={root}>
      {charities.charities?.map((charity, charityIndex) => (
        <Box key={`${charityIndex}`} cols={[12, 12, 6]}>
          <Card charity={charity} index={charityIndex} />
        </Box>
      ))}
    </Grid>);
};

export default Landing;