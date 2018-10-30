import React from 'react';
import Application from './src/Application.js';
import allReducers from './src/reducers/index.js';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )  
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}