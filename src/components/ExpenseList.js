import React from "react";
import Expense from "./Expense";

const ExpenseList = ({ expenses }) => (
  <ul className="expense-list">
    {expenses && expenses.length
      ? expenses.map((expense, index) => {
          return <Expense key={`expense-${expense.id}`} expense={expense} />;
        })
      : "No expenses yet"}
  </ul>
);

export default ExpenseList;
