import { LOGIN_ROUTE, ME_ROUTE } from '@utils';

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

const signupRequest = (body) => {
	return function(dispatch) {
		dispatch(authActions.signup());
		AUTH_ROUTE('/signup', body)
			.then((response) => {
				dispatch(authActions.signinSuccess(response.data));
				window.location.replace('/login');
			})
			.catch(() => {
				dispatch(authActions.signinFailure());
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
