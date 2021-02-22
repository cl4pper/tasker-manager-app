import { GET_PROJECTS_ROUTE } from './api';

// ACTIONS
import * as projectsActions from './actions';

const getProjects = (token) => {
	return function(dispatch) {
		dispatch(projectsActions.loadProjects());
		GET_PROJECTS_ROUTE('/user', token)
			.then((response) => {
				dispatch(projectsActions.loadProjectsSuccess(response.data));
			})
			.catch(() => {
				dispatch(projectsActions.loadProjectsFailure());
			});
	};
};

export { getProjects };
