import React from "react";
import Expense from "./Expense";

import { connect } from "react-redux";
import { getExpenses } from "../redux/selectors";

const ExpenseList = ({ expenses }) => (
  <ul className="expense-list">
    {expenses && expenses.length
      ? expenses.map((expense, index) => {
          return <Expense key={`expense-${expense.id}`} expense={expense} />;
        })
      : "No expenses yet"}
  </ul>
);

const mapStateToProps = store => {
  const expenses = getExpenses(store);
  return { expenses };
};

export default connect(mapStateToProps)(ExpenseList);
