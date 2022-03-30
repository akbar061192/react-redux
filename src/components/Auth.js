import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleAuth } from '../store/actions/authActions/authActionCreators';

const Auth = () => {
  const auth = useSelector(state => state.authReducer.isAuthenticated);
  const dispath = useDispatch();

  const toggleAuthenticate = () => {
    dispath(toggleAuth());
  };
  return (
    <>
      <button onClick={toggleAuthenticate} className='btn btn-info'>
        {auth ? 'Logout' : 'Login'}
      </button>
    </>
  );
};

export default Auth;
