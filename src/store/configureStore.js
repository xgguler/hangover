/*
encapsulate the store configuration to make it easier to maintain.
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import fanEngagementMiddleware from '@store/fanEngagementMiddleware';

const middleWares = [thunk, fanEngagementMiddleware];

export default function configureStore() {
  // specify it to enhance the store with third-party capabilities such as middleware.
  const enhancer = composeWithDevTools(applyMiddleware(...middleWares));
  const store = createStore(reducer, enhancer);
  return store;
}
