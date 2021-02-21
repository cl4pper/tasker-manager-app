import axios from 'axios';

// https://jsonplaceholder.typicode.com/users
// METHOD TO INITIATE API REQUEST
const AUTH_ROUTE = (args = '', body = null) =>
	axios.post('http://localhost:3001/api/auth' + args, body);

const ME_ROUTE = (args = '', token) =>
	axios.get('http://localhost:3001/api/auth' + args, {
		headers: {
			authentication: `Bearer ${token}`
		}
	});

export { AUTH_ROUTE, ME_ROUTE };
