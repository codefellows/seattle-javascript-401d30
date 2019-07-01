import { createStore, combineReducers, applyMiddleware } from 'redux';

import reporter from './middleware/reporter.js';
import doTheThingsReducer from './reducers.js';

let reducers = combineReducers({
  someStuff: doTheThingsReducer,
});

export default () => createStore(reducers, applyMiddleware(reporter));

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
