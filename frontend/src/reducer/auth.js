export default (state = null, action) => {
  let {type, payload} = action;
  switch(type) {
  case 'token_set': return payload;
  case 'token_del': return null;
  default: return state;
  }
};
