import { createAction } from '@reduxjs/toolkit';

type CounterState = {
  count: number;
};

// createAction
// increment
const increment = createAction('INCREMENT', (amount: number) => ({
  payload: amount,
}));

// const incrementAction = increment(3);

// decrement
const decrement = createAction('DECREMENT', (amount: number) => ({
  payload: amount,
}));

// reset
const reset = createAction('RESET');

type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

export const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === increment.type) {
    return { count: state.count + action.payload };
  }

  if (action.type === decrement.type) {
    return { count: state.count - action.payload };
  }

  if (action.type === reset.type) {
    return { count: 0 };
  }

  return state;
};