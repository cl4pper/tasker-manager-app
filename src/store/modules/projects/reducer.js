// import * as githubActions from './actions'

const INITIAL_STATE = {
	loading: false,
	error: false,
	projects: []
};

function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'LOAD_PROJECTS':
			return {
				...state,
				loading: true,
				error: false
			};

		case 'LOAD_PROJECTS_SUCCESS':
			return {
				...state,
				projects: action.payload,
				loading: false,
				error: false
			};

		case 'LOAD_PROJECTS_FAILURE':
			return {
				...state,
				loading: false,
				error: true
			};

		case 'CREATE_PROJECT':
			return {
				...state,
				loading: true,
				error: false
			};

			case 'CREATE_PROJECT_SUCCESS':
			return {
				...state,
				loading: false,
				error: false
			};

			case 'CREATE_PROJECT_FAILURE':
				return {
					...state,
					loading: false,
					error: true
				};

		default:
			return state;
	}
}

export { reducer };
