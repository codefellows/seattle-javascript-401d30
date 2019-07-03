export default(state = null, {type, payload}) => {
  switch(type) {
    case 'SET':
      return payload;
    default:
      return null;
  }
};