import axios from 'axios';

const AUTH_ROUTE = (args = '', body = null) =>
	axios.post('http://localhost:3001/api/auth' + args, body);

export { AUTH_ROUTE };
