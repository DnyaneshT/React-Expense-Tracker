import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';

function App() {
  return (
    <div>
      <Header/>
        <Balance/>
      <IncomeExpense/>
      
    </div>
  );
}

export default App;
