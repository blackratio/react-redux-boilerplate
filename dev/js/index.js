import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// Create global store
// Configuration - Redux devtools
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Render App in DOM
ReactDOM.render(
   <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
   </Provider>
   , document.getElementById('root'));
