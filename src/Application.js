import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import SimpleForm from './components/SimpleForm.js';
import allReducers from './reducers/index.js';

const store = createStore(allReducers);
 export default class Application extends Component{
  render(){
    return(
      <Provider store= {store}>
        <SimpleForm />
      </Provider>
    )
  }
}