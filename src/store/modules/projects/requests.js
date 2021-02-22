import { GET_PROJECTS_ROUTE, CREATE_PROJECT_ROUTE } from './api';

// ACTIONS
import * as projectsActions from './actions';

const getProjects = (token) => {
	return function(dispatch) {
		dispatch(projectsActions.loadProjects());
		GET_PROJECTS_ROUTE(token)
			.then((response) => {
				dispatch(projectsActions.loadProjectsSuccess(response.data));
			})
			.catch(() => {
				dispatch(projectsActions.loadProjectsFailure());
			});
	};
};

const createProject = (token, title) => {
	const body = {
		title,
	};

	return function(dispatch) {
		dispatch(projectsActions.createProject());
		CREATE_PROJECT_ROUTE(token, body)
			.then((response) => {
				dispatch(projectsActions.createProjectSuccess(response.data));
				dispatch(getProjects(localStorage.getItem('taskManagerToken')));
			})
			.catch(() => {
				dispatch(projectsActions.createProjectFailure());
			});
	};
};

export { getProjects, createProject };
