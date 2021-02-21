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

const loginRequest = (query) => {
	return function(dispatch) {
		dispatch(authActions.signin());
		LOGIN_ROUTE('/signin', query)
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

export { loginRequest, getMeRequest };
