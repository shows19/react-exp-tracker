import React from "react";

export const Transaction = ({trans, deleteTrans}) => {
    const sign = trans.amount <0 ? "-" : "+";

  return (
    <li className={trans.amount <0 ? "minus" : "plus"}>
      {trans.desc} <span>{sign}PKR {Math.abs(trans.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTrans(trans.id)}>X</button>
    </li>
  );
};
