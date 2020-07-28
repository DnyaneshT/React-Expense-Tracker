import React,{useState,useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

const AddTransaction = () => {
    const [text,setText] = useState("")
    const [amount,setAmount] = useState("")
    const {addTransaction} = useContext(GlobalContext)

    const handleSubmit=(e)=>{
        e.preventDefault()

        const newTransaction={
            id:Math.floor(Math.random()*1000000),
            text:text,
            amount:+amount
        }

        addTransaction(newTransaction);
    }


    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                {/* <label htmlFor="text">Text</label> */}
                <input type="text"  placeholder="Where did you use this money?" 
                value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
                <div className="form-control">
                {/* <label htmlFor="amount">Amount <br/> 
                    (negative - expense, positive - income)</label>*/}
                    <br/>
                <input type="number"  placeholder="Enter amount"
                value={amount} onChange={(e)=>setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
