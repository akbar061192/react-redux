import React from 'react';
import { useSelector } from 'react-redux';

const AccountType = () => {
  const accountType = useSelector(state => state.bankingReducer.isSavingsAccount);
  return (
    <>
      <h2 className='my-4'>{accountType ? 'Savings Account' : 'Current Account'}</h2>
    </>
  );
};

export default AccountType;
