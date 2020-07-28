import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

function IncomeExpense() {
    const {transactions} = useContext(GlobalContext);
    const plus = transactions.reduce((tot,t)=>(t.amount>0?tot+=t.amount:tot+=0),0).toFixed(2)
    const minus = transactions.reduce((tot,t)=>(t.amount<0?tot+=t.amount:tot+=0),0.00).toFixed(2)

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${plus}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(minus)}</p>
        </div>
      </div>
    )
}

export default IncomeExpense
