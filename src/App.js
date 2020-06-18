import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { TransContextProvider } from './context/TransContext';

function App() {

  return (
    <div>
      <TransContextProvider>
        <Header></Header>
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionList />
          <AddTransaction />
        </div>
      </TransContextProvider>
    </div>
  );
}

export default App;
