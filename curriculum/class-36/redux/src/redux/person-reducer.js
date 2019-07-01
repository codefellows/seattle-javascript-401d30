// {name: 'Jon Snow'}

const defaultState = {name: 'Jon Snow'};

// Vinicio - I'm setting a default state to avoid having an initial undefined state
export default (state = defaultState, {type, payload}) => {
  switch(type){
    case 'CHANGE':
      // Vinicio - payload, in this case, will be my new name
      return {
        name: payload,
      };
    case 'RESET':
      return defaultState;
    default:
      return state; // Vinicio - maybe we could have a middleware to handle this
  }
};