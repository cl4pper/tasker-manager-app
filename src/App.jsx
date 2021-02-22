import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

// STORE
import { getMeRequest } from '@store/modules/user/requests';
import { setToken } from '@store/modules/auth/actions';

// STYLE
import './app.scss';

// COMPONENTS
import { LoggedPath, UnloggedPath, BottomBar, Topbar } from '@containers';
import { SignupPage, LoginPage, HomePage } from '@pages';

const App = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const authToken = auth.token;
	const token = localStorage.getItem('taskManagerToken');
	const user = useSelector((state) => state.user);
	const userData = user.data;

	useEffect(() => {
		if (token && authToken.length === 0) dispatch(setToken(token));
		if (authToken.length > 0) dispatch(getMeRequest(authToken));
	}, [authToken]);

	return (
		<BrowserRouter>
			<div className="app">
				{userData !== null && <Topbar />}

				<UnloggedPath>
					<Route path="/" exact={true}>
						<LoginPage />
					</Route>
				</UnloggedPath>

				<UnloggedPath>
					<Route path="/signup" exact={true}>
						<SignupPage />
					</Route>
				</UnloggedPath>

				<LoggedPath>
					<Route path="/home" exact={true}>
						<HomePage />
					</Route>
				</LoggedPath>

				{userData !== null ? <BottomBar /> : null}
			</div>
		</BrowserRouter>
	);
};

export default App;
