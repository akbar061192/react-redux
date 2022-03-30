import { bankingActions } from './bankingActions';

const deposit = amount => {
  return {
    type: bankingActions.DEPOSIT,
    payload: {
      amount: parseInt(amount),
    },
  };
};

const withdraw = amount => {
  return {
    type: bankingActions.WITHDRAW,
    payload: {
      amount: parseInt(amount),
    },
  };
};

const getInterestAmount = () => {
  return {
    type: bankingActions.COLLECT_INTEREST,
  };
};

const accountDelete = () => {
  return {
    type: bankingActions.DELETE_ACCOUNT,
  };
};

const toggleAccount = () => {
  return {
    type: bankingActions.TOGGLE_ACCOUNT,
  };
};

export { deposit, withdraw, getInterestAmount, accountDelete, toggleAccount };
