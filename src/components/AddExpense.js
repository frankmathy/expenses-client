import React from "react";

import { connect } from "react-redux";
import { addExpense } from "../redux/actions";

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInpit = input => {
    this.setState({ input });
  };

  handleAddExpense = () => {
    this.props.addExpense(this.state.input);
    this.setState({ input: "" });
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

export default connect(null, { addExpense })(AddExpense);
