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

const createProject = () => {
	return {
		type: 'CREATE_PROJECT'
	};
};

const createProjectSuccess = () => {
	return {
		type: 'CREATE_PROJECT_SUCCESS'
	};
};

const createProjectFailure = () => {
	return {
		type: 'CREATE_PROJECT_FAILURE'
	};
};

export {
	loadProjects,
	loadProjectsSuccess,
	loadProjectsFailure,
	createProject,
	createProjectSuccess,
	createProjectFailure
};
