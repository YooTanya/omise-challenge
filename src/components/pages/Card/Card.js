import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CloseButton from '../../shared/CloseButton';
import Button from '../../shared/Button';
import Image from '../../shared/Image';
import Paper from '../../shared/Paper';
import Thumbnail from '../../shared/Thumbnail';
import Typography from '../../shared/Typography';
import { makePayments } from '../../../store/actions';

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
  const [disabledButton, setDisabledButton] = useState(true);

  const dispatch = useDispatch();

  const payments = [10, 20, 50, 100, 500];

  const handleOnCloseOption = useCallback(() => {
    setIsOpenOption(false);
    setSelectedAmount(0);
    setDisabledButton(true);
  },[]);

  const handleOnOpenOption = useCallback(() => {
    setIsOpenOption(true);
  },[]);

  const handleOnSelectAmount = useCallback((amount) => () => {
    setSelectedAmount(amount)
    setDisabledButton(false);
  },[]);

  const handleOnPayment = useCallback((charitiesId, amount, currency) => () => {
    dispatch(makePayments(charitiesId, amount, currency))
  },[dispatch]);

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
            <Typography>Select the amount to donate ({props?.charity?.currency})</Typography>
            <div style={optionsRadioGroup}>
              {payments?.map((amount, amountIndex) => (
                <div key={amountIndex.toString()} style={option}>
                  <input
                    name="payment"
                    type="radio"
                    onClick={handleOnSelectAmount(amount)}
                  />
                  <label>{amount}</label>
                </div>
              ))}
            </div>
            <Button disabled={disabledButton} onClick={handleOnPayment(props?.charity?.id, selectedAmount, props?.charity?.currency)}>Pay</Button>
          </div>
        </Paper>
      )}
    </Thumbnail>
  );
};

export default Card;