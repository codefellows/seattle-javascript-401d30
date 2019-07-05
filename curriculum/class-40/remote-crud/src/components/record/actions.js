import superagent from 'superagent';

export const post = (url, payload) => dispatch => {
  return superagent
    .post(url)
    .send(payload)
    .then(data => {
      dispatch(runPost(data.body));
    });
};

const runPost = payload => {
  return {
    type: 'POST',
    payload: payload,
  };
};
