import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from "redux";
import allReducers from './reducers';
import App from './components/app';

// Cretae gloabal store
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,document.getElementById('root'));
