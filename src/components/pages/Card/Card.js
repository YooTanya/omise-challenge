import React, { useState, useCallback } from 'react';
import CloseButton from '../../shared/CloseButton';
import Button from '../../shared/Button';
import Image from '../../shared/Image';
import Paper from '../../shared/Paper';
import Thumbnail from '../../shared/Thumbnail';
import Typography from '../../shared/Typography';
import { useSelector } from 'react-redux';
import { getCurrency } from '../../../store/selectors';

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
  opacity: '0.97',
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
  marginBottom: '1rem',
};

const closeButton = {
  top: '1rem',
  right: '1rem',
  position: 'absolute',
};

const Card = (props) => {
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);

  const currency = useSelector(getCurrency);
  const payments = [10, 20, 50, 100, 500];

  const handleOnCloseOption = useCallback(() => {
    setIsOpenOption(false);
    setSelectedAmount(0);
  },[]);

  const handleOnOpenOption = useCallback(() => {
    setIsOpenOption(true);
  },[]);

  return (
    <Thumbnail>
      <Image url={`./images/${props?.charity.image}`} style={image}/>
      <div style={description}>
        <Typography>{props?.charity?.name}</Typography>
        <Button style={button} onClick={handleOnOpenOption}>Donate</Button>
      </div>
      {isOpenOption && (
        <Paper style={optionsContainer}>
          <CloseButton style={closeButton} onClick={handleOnCloseOption}>X</CloseButton>
          <div style={optionsContent}>
            <Typography>Select the amount to donate (USD)</Typography>
            <div style={optionsRadioGroup}>
              {payments?.map((payment, paymentIndex) => (
                <div key={paymentIndex.toString()} style={option}>
                  <input
                    name="payment"
                    type="radio"
                  />
                  <label>{payment}</label>
                </div>
              ))}
            </div>
            <Button>Pay</Button>
          </div>
        </Paper>
      )}
    </Thumbnail>
  );
};

export default Card;