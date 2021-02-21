import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';
import { reducer as userReducer } from './user';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer
});

export { rootReducer };
