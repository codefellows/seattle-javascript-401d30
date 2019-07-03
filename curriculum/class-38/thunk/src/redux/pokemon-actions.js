import superagent from 'superagent';

//------------------------------------------------------------------------------------------
// ASYNC
//------------------------------------------------------------------------------------------
export const requestPokemonData = pokemonName => store => {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  // Vinicio - the store gives me two things: state and dispatch
  return superagent.get(API_URL)
    .then(response => {
      // Vinicio - I need to close the loop with a sync action
      return store.dispatch(set(response.body));
    })
    .catch(console.log);
};



//------------------------------------------------------------------------------------------
// SYNC
//------------------------------------------------------------------------------------------
export const set = payload => ({
  type:'SET',
  payload: payload,
});