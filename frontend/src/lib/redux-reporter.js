let reporter = store => next => action => {
  console.log('Action happening in the reporter: ', action);
  try {
    let result = next(action);
    console.log('Current state: ', store.getState());
    return result;
  } catch(error) {
    error.action = action;
    console.error('An error: ', error);
    return error;
  }
};

export default reporter;
