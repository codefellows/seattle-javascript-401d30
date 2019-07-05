import superagent from 'superagent';

// ----------------------------------------------------------------------------------
// SYNC
// ----------------------------------------------------------------------------------
// Vinicio - by not exporting this function, I make sure it can't be misused
const post = payload => ({
  type: 'POST',
  payload,
});

// ----------------------------------------------------------------------------------
// ASYNC
// ----------------------------------------------------------------------------------

// Curried function with 2 curried arguments:
// (url, payload)
// dispatch
export const postRequest = (url, payload) => dispatch => {
  return superagent
    .post(url)
    .send(payload)
    .then(response => {
      dispatch(post(response.body));
    })
    .catch(console.error);
};

