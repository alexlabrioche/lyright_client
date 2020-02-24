import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import combinedReducers from './reducers';

// const getMiddleware = () => {
//   if (process.env.NODE_ENV === 'production') {
//     return applyMiddleware(promiseMiddleware);
//   } else {
//     // Enable additional logging in non-production environments.
//     return applyMiddleware(
//       promiseMiddleware,
//       localStorageMiddleware,
//       createLogger(),
//     );
//   }
// };

export const store = createStore(combinedReducers, composeWithDevTools());
