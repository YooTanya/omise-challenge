import React from 'react';
import CloseButton from '../../shared/CloseButton';
import Button from '../../shared/Button';
import Image from '../../shared/Image';
import Paper from '../../shared/Paper';
import Thumbnail from '../../shared/Thumbnail';
import Typography from '../../shared/Typography';

const description = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  boxSizing: 'border-box',
  height: '20%',
};

const button = {
  alignItem: 'center',
};

const image = {
  height: '80%',
  borderTopLeftRadius: 'inherit',
  borderTopRightRadius: 'inherit',
};

const optionsContainer = {
  position: 'absolute',
  top: '0',
  opacity: '0.8',
};

const optionsContent = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const optionsRadioGroup = {
  marginTop: '1rem',
};

const option = {
  display: 'inline-block',
};

const closeButton = {
  top: '1rem',
  right: '1rem',
  position: 'absolute',
};

const Card = (props) => {

  const payments = [10, 20, 50, 100, 500];

  return (
    <Thumbnail>
      <Image url={`./images/${props?.charity.image}`} style={image}/>
      <div style={description}>
        <p>{props?.charity?.name}</p>
        <Button style={button}>Donate</Button>
      </div>
      <Paper style={optionsContainer}>
        <CloseButton style={closeButton}>X</CloseButton>
        <div style={optionsContent}>
          <Typography>Select the amount to donate (USD)</Typography>
          <div style={optionsRadioGroup}>
            {payments?.map((payment, paymentIndex) => (
              <div style={option}>
                <input
                  name="payment"
                  type="radio"
                />
                <label>{payment}</label>
              </div>
            ))}
          </div>
        </div>
      </Paper>
    </Thumbnail>
  );
};

export default Card;