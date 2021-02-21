import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// MOCKS
import { taskListMock } from '@utils';

// STYLE
import './app.scss';

// COMPONENTS
import { Project, Topbar } from '@components';
import { LoggedPath, UnloggedPath } from '@containers';
import { LoginPage, HomePage } from '@pages';

class AppContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<div className="app">
						<Topbar />

						{/* <Route path="/" exact={true}>
							<LoginPage />
						</Route> */}

						<UnloggedPath>
							<Route path="/" exact={true}>
								<LoginPage />
							</Route>
						</UnloggedPath>

						<LoggedPath to="/">
							<Route path="/home" exact={true}>
								<HomePage />
							</Route>
						</LoggedPath>
					</div>
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	strings: state.strings.data
});

const App = connect(mapStateToProps)(AppContainer);

export default App;
