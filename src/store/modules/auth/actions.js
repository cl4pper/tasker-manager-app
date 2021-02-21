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

const setToken = (response) => {
	return {
		type: 'SET_AUTH_TOKEN',
		payload: response
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

export { signin, signinSuccess, signinFailure, signup, signupSuccess, signupFailure, setToken };
