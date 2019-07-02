let initialState = [
  { name: 'john', position: 'LF', bats: 'R', throws: 'L' },
  { name: 'zach', position: 'C', bats: 'R', throws: 'R' }
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return {  };

    case 'POST':
      return [...state, payload];

    case 'PUT':
      return null;
    case 'DELETE':
      return state.filter((record, idx) => idx !== payload);

    default:
      return state;
  }
};
