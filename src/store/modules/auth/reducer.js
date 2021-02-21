// import * as githubActions from './actions'

const INITIAL_STATE = {
	loading: false,
	error: false,
	token: ''
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SIGNUP':
			return {
				...state,
				loading: true,
				error: false
			};

		case 'SIGNUP_SUCCESS':
			return {
				...state,
				loading: false,
				token: action.payload
			};

		case 'SET_AUTH_TOKEN':
			return {
				...state,
				token: action.payload
			};

		case 'SIGNUP_FAILURE':
			return {
				...state,
				loading: false,
				error: true
			};

		case 'SIGNIN':
			return {
				...state,
				loading: true,
				error: false
			};

		case 'SIGNIN_SUCCESS':
			return {
				...state,
				loading: false,
				token: action.payload
			};

		case 'SIGNIN_FAILURE':
			return {
				...state,
				loading: false,
				error: true
			};

		case 'SIGNOUT':
			return {
				...state,
				token: '',
				loading: false,
				error: false
			};

		default:
			return state;
	}
}

export { reducer };
