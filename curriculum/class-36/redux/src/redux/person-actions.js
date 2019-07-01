// Vinicio - this is just a function that returns an action
export const change = payload => ({
  type: 'CHANGE', // -> this can be anything
  payload,
});

export const reset = payload => ({
  type: 'RESET',
  payload,
});

