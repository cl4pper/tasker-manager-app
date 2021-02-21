const signin = () => {
	return {
		type: 'SIGNIN'
	};
};

const signinSuccess = (response) => {
	return {
		type: 'SIGNIN_SUCCESS',
		payload: response.data
	};
};

const signinFailure = () => {
	return {
		type: 'SIGNIN_FAILURE'
	};
};

const signup = () => {
	return {
		type: 'SIGNUP'
	};
};

const signupSuccess = (response) => {
	return {
		type: 'SIGNUP_SUCCESS',
		payload: response.data
	};
};

const signupFailure = () => {
	return {
		type: 'SIGNUP_FAILURE'
	};
};

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

export {
	signin,
	signinSuccess,
	signinFailure,
	loadUser,
	loadUserSuccess,
	loadUserFailure,
	signup,
	signupSuccess,
	signupFailure
};
