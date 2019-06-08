import React from 'react';
import { connect } from 'react-redux'; // Connect this component to the store so it can dispatch
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/'); // Redirect to the dashboard after adding an expense
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense : (expense) => dispatch(startAddExpense(expense))
});

// First parenthesis is empty as we do not need the state of the store
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
