import React, { useContext } from "react";
import { TransContext } from "../context/TransContext";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { trans, setTrans, deleteTrans, loadTestTrans } = useContext(TransContext);
  const transactions = trans.transactions;

  //console.log({trans});
  //console.log({transactions});

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            trans={transaction}
            key={transaction.id}
            deleteTrans={deleteTrans}
          />
        ))}
      </ul>
      <div className="history-buttons-container">
        <div>
            <button className="btn history-btn" onClick={() => loadTestTrans()}>
                Load Test Transactions
            </button>
        </div>
        <div>
            <button className="btn history-btn" onClick={() => setTrans({ transactions: [] })}>
                Clear All Transactions
            </button>
        </div>
    </div>
    </>
  );
};
