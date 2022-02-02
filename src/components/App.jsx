import React from 'react';
import { connect } from 'react-redux';
// import { useState } from 'react';
import * as actions from '../../src/redux/counter/counter-actions';

const App = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <>
      <button type="button" onClick={() => onIncrement(step)}>
        збільшити на {step}
      </button>
      <div>{value}</div>
      <button type="button" onClick={() => onDecrement(step)}>
        зменшити на {step}
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
