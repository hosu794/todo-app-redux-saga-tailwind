import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootSaga from './sagas'
import {Provider} from 'react-redux'

import {createStore, applyMiddleware} from 'redux'

import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
const logger = createLogger()
const saga = createSagaMiddleware();

const middleware = [logger, saga]

const store = createStore(rootReducer, applyMiddleware(...middleware));
saga.run(rootSaga)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
