import React from "react";

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInpit = input => {
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInpit(e.target.value)}
          value={this.state.input}
        />
        <button class="add-expense" onClick={this.handleAddExpense}>
          Add Expense
        </button>
      </div>
    );
  }
}

export default AddExpense;
