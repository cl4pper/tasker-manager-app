import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// STORE
import { getMeRequest } from '@store/modules/auth/requests';

// STYLE
import './app.scss';

// COMPONENTS
import { Topbar, BottomBar } from '@components';
import { LoggedPath, UnloggedPath } from '@containers';
import { LoginPage, HomePage } from '@pages';

const App = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const data = auth.data;
	const token = localStorage.getItem('taskManagerToken');

	useEffect(() => {
		if (token && data === null) dispatch(getMeRequest(token));
	}, [data]);

	return (
		<BrowserRouter>
			<div className="app">
				<Topbar />

				<UnloggedPath to="/home">
					<Route path="/" exact={true}>
						<LoginPage />
					</Route>
				</UnloggedPath>

				<LoggedPath to="/">
					<Route path="/home" exact={true}>
						<HomePage />
					</Route>
				</LoggedPath>

				<BottomBar />
			</div>
		</BrowserRouter>
	);
};

export default App;
