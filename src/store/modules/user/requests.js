import { ME_ROUTE } from './api';

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

export { getMeRequest };
