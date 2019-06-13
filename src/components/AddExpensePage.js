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
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Save Expense</h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense : (expense) => dispatch(startAddExpense(expense))
});

// First parenthesis is empty as we do not need the state of the store
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
