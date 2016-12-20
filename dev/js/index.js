import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import App from './components/app';

// Create global store
// Configuration - Redux devtools
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Render App in DOM
ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, document.getElementById('root'));
