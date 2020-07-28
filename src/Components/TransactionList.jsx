import React,{useContext} from 'react';
import  {GlobalContext} from '../Context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    // console.log(context)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
            {transactions.map(transaction => (
                <Transaction key={transaction.id} trans={transaction}/>
            ))}
                
            </ul>
        </>
    );
}

export default TransactionList;
