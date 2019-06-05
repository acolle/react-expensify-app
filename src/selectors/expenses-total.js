// Get total expenses
export default (expenses) => {
  const totalExpenses = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
  }, 0);
  return totalExpenses;
};
