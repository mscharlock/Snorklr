import superagent from 'superagent';
import * as utils from '../lib/utils';

export const tokenSet = token => ({
  type: 'token_set',
  payload: token,
});

export const tokenDel = () => ({
  type: 'token_del',
  payload: null,
});


//need to review this - essentially it is putting the user info and then setting the token into localStorage//
export const signupReq = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
  .withCredentials()
  .send(user)
  .then(res => {
    dispatch(tokenSet(res.text));
    try {
      localStorage.token = res.text;
    } catch(e) {
      console.error(e);
    }
    return res;
  })
  .catch(console.error);
};


//review this as well//
export const loginRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
  .withCredentials()
  .auth(user.username, user.password)
  .then(res => {
    dispatch(tokenSet(res.text));
    return res;
  });
};

export const tokenDeleteRequest = () => dispatch => {
  //look through notes on this one//
};
