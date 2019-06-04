import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setValue = 101 } = {}) => ({
  type: 'SET',
  setValue
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1 - Reducers are pure functions (not interacting with any object outside of its body)
// 2 - Never change or action (below we return a new object to mutate the count)
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.setValue
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Redux Store
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})
// Actions are contained in an object that is sent to the store
// 1 - Increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// unsubscribe();

store.dispatch(setCount({ }));

store.dispatch(incrementCount({
  incrementBy: 5
}));

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
