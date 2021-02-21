
// ACTION TO REQUEST DATA FROM API
const login = () => {
  return {
    type: 'LOGIN'
  };
};

// ACTION EXECUTED AFTER SUCCESSFULL RESPONSE
const loadCommitsSuccess = response => {
  return {
    type: 'LOAD_COMMITS_SUCCESS',
    payload: response
  };
};

// ACTION EXECUTED AFTER A BAD REQUEST
const loadCommitsFailure = response => {
  return {
    type: 'LOAD_COMMITS_FAILURE',
    payload: response
  };
};

export { login };
