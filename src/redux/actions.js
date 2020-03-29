import { ADD_EXPENSE } from "./actionTypes";

let nextExpenseId = 0;

export const addExpense = amount => ({
  type: ADD_EXPENSE,
  payload: {
    id: ++nextExpenseId,
    amount
  }
});
