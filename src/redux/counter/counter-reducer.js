import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './counter-types';

const valueReducer = (state = 100, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;

    case DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 10, actions) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
