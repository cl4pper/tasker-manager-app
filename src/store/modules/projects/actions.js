const loadProjects = () => {
	return {
		type: 'LOAD_PROJECTS'
	};
};

const loadProjectsSuccess = (response) => {
	return {
		type: 'LOAD_PROJECTS_SUCCESS',
		payload: response.data
	};
};

const loadProjectsFailure = () => {
	return {
		type: 'LOAD_PROJECTS_FAILURE'
	};
};

export { loadProjects, loadProjectsSuccess, loadProjectsFailure };
