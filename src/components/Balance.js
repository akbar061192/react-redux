import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const balance = useSelector(state => state.bankingReducer.balance);

  return <h2 className='my-3'>${balance}</h2>;
};

export default Balance;
