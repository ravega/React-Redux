import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { createStore } from 'redux';

// import registerServiceWorker from './registerServiceWorker'; To be included

// Reducer function
const counter = (state = 0, action) => {
  switch( action.type ) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Counter = ({
  value,
  onIncrement,
  onDecrement  
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);


const store = createStore( counter );

const render = () => {
  ReactDOM.render(
    <div>
      <Main dStore={store}/>
      <Counter value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
      />
    </div>,
    document.getElementById('root')
  );
};

store.subscribe( render );
render();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

