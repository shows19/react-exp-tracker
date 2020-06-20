import React, { createContext, useState } from "react";

const testTransactions = {
  transactions: [
    { id: 1, desc: "Income 1", amount: 1000 },
    { id: 2, desc: "Test Expense1", amount: -100 },
    { id: 3, desc: "Income 2", amount: 500 },
    { id: 4, desc: "Exp 2", amount: -10 },
  ],
};

const realTransactions = {
    transactions: []
};

export const TransContext = createContext();

export const TransContextProvider = ({ children }) => {
  const [trans, setTrans] = useState(realTransactions);

    // Load test Transactions
    function loadTestTrans(){
        setTrans({ transactions: testTransactions.transactions });
    }

    // Delete transaction based on id
    function deleteTrans(id) {

        // create a new object filtering out the one with matching id
        const updatedTransactions = trans.transactions
        .filter( (item) => item.id !== id  );

        setTrans({ transactions: updatedTransactions });
    }

    // Delete transaction based on id
    function addTrans(transaction) {

        //console.log("Add transaction =",transaction);
        
        // create a new object filtering out the one with matching id
        trans.transactions.push(transaction);
        
        //console.log("updated transaction= ", trans.transactions);

        setTrans({ transactions: trans.transactions });
      }
    
  return (
    <TransContext.Provider value={{trans, setTrans, deleteTrans, addTrans, loadTestTrans}}>
        {children}
    </TransContext.Provider>
  );
};
