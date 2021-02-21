// import * as githubActions from './actions'

const INITIAL_STATE = {
	loading: false,
	error: false,
	data: null,
	projects: []
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
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
				projects: action.payload.projects,
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
