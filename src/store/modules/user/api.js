import axios from 'axios';

const ME_ROUTE = (args = '', token) =>
	axios.get('http://localhost:3001/api/auth' + args, {
		headers: {
			authorization: `Bearer ${token}`
		}
	});

export { ME_ROUTE };
