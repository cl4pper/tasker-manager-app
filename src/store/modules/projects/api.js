import axios from 'axios';

const GET_PROJECTS_ROUTE = (args = '', token) =>
	axios.get('http://localhost:3001/api/projects' + args, {
		headers: {
			authorization: `Bearer ${token}`
		}
	});

export { GET_PROJECTS_ROUTE };
