let initialState = [];

export default (state = initialState, action) => {
  let { type, payload = {} } = action;

  let { id, model, record } = payload;

  switch (type) {
    case 'POST':
      return [...state, payload];

    default:
      return state;
  }
};
