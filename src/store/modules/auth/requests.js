import { AUTH_ROUTE } from '@utils';

// ACTIONS
import * as authActions from './actions';

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
			})
			.catch(() => {
				dispatch(authActions.signinFailure());
			});
	};
};

export { signupRequest, loginRequest };
