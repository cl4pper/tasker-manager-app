const loadUser = () => {
	return {
		type: 'LOAD_USER'
	};
};

const loadUserSuccess = (response) => {
	return {
		type: 'LOAD_USER_SUCCESS',
		payload: response.data
	};
};

const loadUserFailure = () => {
	return {
		type: 'LOAD_USER_FAILURE'
	};
};

export { loadUser, loadUserSuccess, loadUserFailure };
