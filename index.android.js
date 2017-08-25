import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer'
const loggerMiddleware = createLogger({predicate:(getState,action)=> __DEV__});

function configureStore(initialState){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer,initialState,enhancer);
}

const store = configureStore({});

//Um componente do React Redux chamado <Provider>
//disponibiliza a redux-store para todos os container components
//sem precisar passá-la via props manualmente.
//Container components são aqueles conectados via connect().
const App = () => (
  <Provider store={store}>
    <AppContainer/>
  </Provider>
);

AppRegistry.registerComponent('ola', () => App);
