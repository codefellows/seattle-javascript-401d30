const initialState = [];

export default (state = initialState, action) => {
 const {type, payload} = action;

 switch(type) {
  case 'POST':
    return [...state, payload];
  default:
   return state;
 }
}