import React, { Component } from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import Signin from './components/auth/Signin.js';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )  
);

export default class Application extends Component{
  render(){
    return(
      <Provider store={store}>
        <Signin />
      </Provider>
    )
  }
}