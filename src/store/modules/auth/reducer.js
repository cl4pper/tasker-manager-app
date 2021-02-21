// import * as githubActions from './actions'

const INITIAL_STATE = {
	loading: false,
	error: false,
	token: '',
	data: null
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SIGNIN':
			return {
				...state,
				loading: true,
				error: false
			};

		case 'SIGNIN_SUCCESS':
			return {
				...state,
				logged: true,
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
				loading: true,
				error: false
			};

		case 'LOAD_USER':
			return {
				...state,
				loading: true,
				error: false
			};

		case 'LOAD_USER_SUCCESS':
			return {
				...state,
				data: action.payload,
				loading: false,
				error: false
			};

		case 'LOAD_USER_FAILURE':
			return {
				...state,
				token: '',
				loading: false,
				error: true
			};

		default:
			return state;
	}
}

export { reducer };
