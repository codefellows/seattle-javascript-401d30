// Vinicio - when I call my reducer, I need to make sure that I send exactly what I expect
export default (state = [], {type, payload}) => {
  switch(type) {
    case 'CATEGORY_CREATE':
      // Vinicio - payload is the new category I want to create
      return [...state, payload];
    case 'CATEGORY_UPDATE':
      return null;
    case 'CATEGORY_DELETE':
      return state.filter(category => category.id !== payload.id);
    default:
      return state;
  }
};
