import React from "react";
import "./App.css";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div className="App">
      <h1>Expenses</h1>
      <AddExpense />
      <ExpenseList />
    </div>
  );
}

export default App;
