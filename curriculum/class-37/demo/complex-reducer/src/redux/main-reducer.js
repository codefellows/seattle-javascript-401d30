import {combineReducers} from 'redux';
import cards from './card-reducer';
import categories from './category-reducer';

export default combineReducers({
  cards,
  categories,
});

// export default combineReducers({
//   cards: cardReducer,
//   categories: categoryReducer,
// });
