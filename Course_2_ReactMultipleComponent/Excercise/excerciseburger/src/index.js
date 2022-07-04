import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { createStore } from 'redux'
import ExcerciseBurger from './redux/rootReducer';
import { Provider } from 'react-redux';


const store = createStore(ExcerciseBurger)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
