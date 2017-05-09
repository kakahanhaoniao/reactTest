import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from '../components/Todo/app';
import todoApp from '../reducers/index';
import configureStore from '../store/configureStore';
const store = configureStore();
console.log(store)
ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app3'));
