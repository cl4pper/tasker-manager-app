import { AUTH_ROUTE, ME_ROUTE } from '@utils';

// ACTIONS
import * as authActions from './actions';

const getMeRequest = (token) => {
	return function(dispatch) {
		dispatch(authActions.loadUser());
		ME_ROUTE('/me', token)
			.then((response) => {
				dispatch(authActions.loadUserSuccess(response.data));
			})
			.catch(() => {
				dispatch(authActions.loadUserFailure());
			});
	};
};

const signupRequest = (query) => {
	return function(dispatch) {
		dispatch(authActions.signup());
		AUTH_ROUTE('/signup', query)
			.then((response) => {
				dispatch(authActions.signupSuccess(response.data));
				window.location.replace('/');
			})
			.catch(() => {
				dispatch(authActions.signupFailure());
			});
	};
};

const loginRequest = (query) => {
	return function(dispatch) {
		dispatch(authActions.signin());
		AUTH_ROUTE('/signin', query)
			.then((response) => {
				dispatch(authActions.signinSuccess(response.data));
				localStorage.setItem('taskManagerToken', response.data.data);
				dispatch(getMeRequest(response.data.data));
			})
			.catch(() => {
				dispatch(authActions.signinFailure());
			});
	};
};

export { signupRequest, loginRequest, getMeRequest };
