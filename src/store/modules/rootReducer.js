import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth';
import { reducer as githubReducer } from './github';
import { reducer as stringsReducer } from './strings';

const rootReducer = combineReducers({
	auth: authReducer,
  github: githubReducer,
  strings: stringsReducer
});

export { rootReducer };
