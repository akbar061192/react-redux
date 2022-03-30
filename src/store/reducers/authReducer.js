import { authActions } from '../actions/authActions/authActions';

const initialState = {
  isAuthenticated: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.TOGGLE_AUTH:
      return { ...state, isAuthenticated: !state.isAuthenticated };
    default:
      return state;
  }
};
