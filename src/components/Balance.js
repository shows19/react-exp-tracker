import React, { useContext } from "react";
import { TransContext } from "../context/TransContext";

export const Balance = () => {
  const {trans} = useContext(TransContext);
  const transactions = trans.transactions;

  //console.log("Balance of transactions = ", transactions);

  const bal = transactions
  .reduce((total, item) => (total += item.amount), 0)
  .toFixed(2);

  const fontCss = bal<0 ? "minus":"plus";

  return (
    <div className="center">
      <h4>Your Balance</h4>
      <h1 className={`money ${fontCss}`}>PKR {bal}</h1>
    </div>
  );
};
