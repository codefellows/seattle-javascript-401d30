import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import mainReducer from './main-reducer';

export default () => {
  const store = createStore(mainReducer, composeWithDevTools());
  return store;
};