// import * as githubActions from './actions'

const INITIAL_STATE = {
  loading: false,
	error: false,
	logged: false,
  data: []
};

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: false,
				error: false,
				logged: true,
      };

    case 'LOGOUT':
    return {
			...state,
			loading: true,
			error: false,
			logged: false,
    };

    case 'LOGIN_SUCCESS':
        return {
          ...state,
          loading: false,
          error: true
				};

		case 'LOGIN_FAILURE':
			return {
				...state,
				loading: false,
				error: true
			};

    default:
      return state;
  }
}

export {reducer};
