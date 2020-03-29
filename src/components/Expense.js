import React from "react";

const Expense = ({ expense }) => (
  <li className="expense-item">
    <span>{expense.amount}</span>
  </li>
);

export default Expense;
