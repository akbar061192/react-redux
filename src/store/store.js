import { createStore, combineReducers } from 'redux';
import { bankingReducer } from './reducers/bankingReducer';
import { authReducer } from './reducers/authReducer';

export const store = createStore(
  combineReducers({
    bankingReducer,
    authReducer,
  })
);

store.subscribe(() => {
  console.log('store updated');
  console.log(store.getState());
});
