import {createStore, applyMiddleware} from 'redux';
// Vinicio - only do this in development,
import {composeWithDevTools}  from 'redux-devtools-extension';

import person from './person-reducer';
import reduxLogger from './middleware/redux-logger';


export default () => {
  return createStore(person, composeWithDevTools(
    applyMiddleware(reduxLogger)
  ))
};

// Vinicio - remember you can combine reducers with a function call combineReducers
// const reducers = combineReducers({
// });
