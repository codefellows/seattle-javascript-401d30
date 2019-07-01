export default store => next => action => {
  try{
    const result = next(action); // -->

    console.log(store.getState());
    console.log(result);
    
    return result; // <--
  } catch (error) {
    console.error(error);
    return error;
  }
}

// const midleware = store => {
//   return next => {
//     return action => {
//       // here you do your thing
//     }
//   };
// };