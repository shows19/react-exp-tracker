import React, { useState, useContext } from 'react'
import { TransContext } from '../context/TransContext'

export const AddTransaction = () => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState();
    const { addTrans } = useContext(TransContext);

    function getId() {
        return Math.floor(Math.random() * 10000000);
    };

    const submitForm = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: getId(),
            desc: desc,
            amount: +amount
        }

        addTrans(newTransaction);
        
        // reset fields
        setDesc('');
        setAmount('');
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="desc">Description</label>
                    <input type="text" id="desc" value={desc} 
                        onChange={(e) => { setDesc(e.target.value)} }
                        placeholder="Enter transaction description..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" value={amount} 
                        onChange={(e) => { setAmount(e.target.value)} }
                        placeholder="+ive number for income, -ive number for expense..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
