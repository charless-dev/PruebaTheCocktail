import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app';
import reducers from './reducers';
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,composeWithDevTools() )}>
    <App />
  </Provider>,
  rootElement
);
