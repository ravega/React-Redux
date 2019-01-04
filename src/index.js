import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// import registerServiceWorker from './registerServiceWorker'; To be included

export const addBookAct = (name, price) => ({
  type: 'ADD_BOOK',
  name: name,
  price: price
})

export const deleteBookAct = (name) => ({
  type: 'DELETE_BOOK',
  name: name
})

const initialState = {
  books: [{name: "Java 8", price: "33"},{name: "Linux", price: "30"}]
}

// Reducer function
const bookStore = (state = initialState, action) => {
  switch( action.type ) {
    case 'ADD_BOOK': {
      console.log('Add Book:', action.name);
      return Object.assign({}, state, {
        books: state.books.concat({
          name: action.name,
          price: action.price
        })
      })
    }
    case 'DELETE_BOOK': {
      console.log('Deleting book ', action.name);
      return Object.assign({}, state, {
        books: state.books.filter( el => el.name !== action.name)
      })
    }
    default:
      return state;
  }
}

const store = createStore( bookStore );

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe( render );
render();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

