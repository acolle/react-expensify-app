// Import React libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'; // Import Router
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss'; // Import CSS files
import 'normalize.css/normalize.css'; // Reset CSS style for cross-browser development
import 'react-dates/lib/css/_datepicker.css'; //Style the date picker widget

const store = configureStore();
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
