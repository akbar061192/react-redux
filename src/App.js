import React from 'react';
import AccountType from './components/AccountType';
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';

function App() {
  return (
    <>
      <Auth />
      <Balance />
      <Banking />
      <AccountType />
    </>
  );
}

export default App;
