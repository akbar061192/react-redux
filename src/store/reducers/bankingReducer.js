import { bankingActions } from '../actions/bankingActions/bankingActions';

const initialState = {
  balance: 0,
  isSavingsAccount: true,
};

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case bankingActions.DEPOSIT:
      return { ...state, balance: state.balance + action.payload.amount };
    case bankingActions.WITHDRAW:
      return { ...state, balance: state.balance - action.payload.amount };
    case bankingActions.COLLECT_INTEREST:
      return { ...state, balance: state.balance + 1.03 };
    case bankingActions.DELETE_ACCOUNT:
      return { ...state, balance: 0 };
    case bankingActions.TOGGLE_ACCOUNT:
      return { ...state, isSavingsAccount: !state.isSavingsAccount };
    default:
      return state;
  }
};
