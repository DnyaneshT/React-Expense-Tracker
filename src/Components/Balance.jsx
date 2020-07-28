import React,{useContext} from 'react';
import { GlobalContext} from '../Context/GlobalState';

function Balance() {
    const {transactions} = useContext(GlobalContext)
    const total = transactions.reduce((tot,t)=>(tot+=t.amount),0).toFixed(2)
    return (
        <div className="container">
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </div>
    )
}

export default Balance
