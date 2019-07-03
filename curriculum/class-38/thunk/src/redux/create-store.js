import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from './middleware/thunk-middleware';
import pokemonReducer from './pokemon-reducer';

const reducer = combineReducers({
  pokemon: pokemonReducer,
});


export default () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
