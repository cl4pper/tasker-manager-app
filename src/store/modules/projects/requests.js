import { GET_PROJECTS_ROUTE, CREATE_PROJECT_ROUTE, DELETE_PROJECT_ROUTE } from './api';

// ACTIONS
import * as projectsActions from './actions';

const authToken = localStorage.getItem('taskManagerToken');

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
		title
	};

	return function(dispatch) {
		dispatch(projectsActions.createProject());
		CREATE_PROJECT_ROUTE(token, body)
			.then((response) => {
				dispatch(projectsActions.createProjectSuccess(response.data));
				dispatch(getProjects(authToken));
			})
			.catch(() => {
				dispatch(projectsActions.createProjectFailure());
			});
	};
};

const deleteProject = (projectId) => {
	return function(dispatch) {
		dispatch(projectsActions.createProject());
		DELETE_PROJECT_ROUTE(authToken, projectId)
			.then((response) => {
				dispatch(projectsActions.createProjectSuccess(response.data));
				dispatch(getProjects(authToken));
			})
			.catch(() => {
				dispatch(projectsActions.createProjectFailure());
			});
	};
};

export { getProjects, createProject, deleteProject };
