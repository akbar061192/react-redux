import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deposit,
  withdraw,
  getInterestAmount,
  accountDelete,
  toggleAccount,
} from '../store/actions/bankingActions/bankingActionCreators';

const Banking = () => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const depositAmount = () => {
    dispatch(deposit(amount));
  };

  const withdrawAmount = () => {
    dispatch(withdraw(amount));
  };

  const getInterest = () => {
    dispatch(getInterestAmount());
  };

  const deleteAccount = () => {
    dispatch(accountDelete());
  };

  const changeAccountType = () => {
    dispatch(toggleAccount());
  };

  return (
    <>
      <div className='form-group'>
        <input
          type='number'
          value={amount}
          onChange={event => setAmount(event.target.value)}
          className='form-control my-4 w-25'
        />
        <button className='btn btn-success mx-3' onClick={depositAmount}>
          Deposit
        </button>
        <button className='btn btn-primary mx-3' onClick={withdrawAmount}>
          Withdraw
        </button>
        <button className='btn btn-warning mx-3' onClick={getInterest}>
          Get Interest
        </button>
        <button className='btn btn-danger mx-3' onClick={deleteAccount}>
          Delete Account
        </button>
        <button className='btn btn-light mx-3' onClick={changeAccountType}>
          Change Account Type
        </button>
      </div>
    </>
  );
};

export default Banking;
