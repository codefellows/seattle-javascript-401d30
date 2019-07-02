const defaultState = {};

export default (state = defaultState, {type, payload}) => {
  let updatedState = null;
  let categoryId = null;
  let categoryCards = null;
  let targetCardId = null;

  switch(type){
    case 'CATEGORY_CREATE':
      // Vinicio - Assumptions:
      // we have a previous state that's an object
      // payload has an id, and is an object representing the category
      // the id is unique
      // the payload DOES NOT represent a card in here
      return {...state, [payload.id]: []};
    case 'CATEGORY_DELETE':
      updatedState = {...state};
      delete updatedState[payload.id];
      return updatedState;
    case 'CARD_CREATE':
      categoryId = payload.categoryId;
      categoryCards = state[categoryId];

      return {...state, [categoryId]: [...categoryCards, payload]};
    case 'CARD_DELETE':
      // Vinicio - the id I want to delete is in the payload
      targetCardId = payload.id;
      categoryId = payload.categoryId;
      categoryCards = state[categoryId]; // Vinicio - this is the array that we want

      return {...state, [categoryId]: categoryCards.filter(card => card.id !== targetCardId)};
    default:
      // Vinicio - log here
      return state;
  }
};

// CARD_CREATE
// CARD_UPDATE
// CARD_DELETE

