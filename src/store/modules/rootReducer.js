import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';
import { reducer as userReducer } from './user';
import { reducer as projectsReducer } from './projects';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	projects: projectsReducer
});

export { rootReducer };
