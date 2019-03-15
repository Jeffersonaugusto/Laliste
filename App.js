import React from 'react';
import AppNavigator from './src/Routes/Routes'
import {createStore, applyMiddleware} from 'redux'
import ReduxPromise from 'redux-promise'
import {Provider} from 'react-redux'
import reducers from './src/Reducers'

export default class App extends React.Component {
   render() {
    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
    const store= createStoreWithMiddleware(reducers) //cria aplication state
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
      );
  }
}