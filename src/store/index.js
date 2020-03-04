import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import combinedReducers from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
