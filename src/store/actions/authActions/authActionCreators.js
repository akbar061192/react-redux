import { authActions } from './authActions';

const toggleAuth = () => {
  return {
    type: authActions.TOGGLE_AUTH,
  };
};

export { toggleAuth };
