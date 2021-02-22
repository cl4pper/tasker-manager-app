import axios from 'axios';

const GET_PROJECTS_ROUTE = (token) =>
	axios.get('http://localhost:3001/api/projects/user', {
		headers: {
			authorization: `Bearer ${token}`
		}
	});

const CREATE_PROJECT_ROUTE = (token, body) =>
	axios.post('http://localhost:3001/api/project', body, {
		headers: {
			authorization: `Bearer ${token}`
		}
	});

const DELETE_PROJECT_ROUTE = (token, projectId) =>
	axios.delete('http://localhost:3001/api/project/' + projectId, {
		headers: {
			authorization: `Bearer ${token}`
		}
	});

export { GET_PROJECTS_ROUTE, CREATE_PROJECT_ROUTE, DELETE_PROJECT_ROUTE };
