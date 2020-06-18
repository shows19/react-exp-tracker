import React, { useContext } from "react";
import { TransContext } from "../context/TransContext";

export const AccountSummary = () => {
  const { trans } = useContext(TransContext);
  const transactions = trans.transactions;

  const totalIncome = transactions
    .filter((item) => item.amount > 0)
    .reduce((total, item) => (total += item.amount), 0)
    .toFixed(2);

  const totalExpense = transactions
    .filter((item) => item.amount < 0)
    .reduce((total, item) => (total += item.amount), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+PKR {totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-PKR {Math.abs(totalExpense)}</p>
      </div>
    </div>
  );
};
