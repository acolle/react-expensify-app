// Import React libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'; // Import Router
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss'; // Import CSS files
import 'normalize.css/normalize.css'; // Reset CSS style for cross-browser development
import 'react-dates/lib/css/_datepicker.css'; //Style the date picker widget
import './firebase/firebase';

const store = configureStore();
store.subscribe(() => {
    console.log(store.getState());
});

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
