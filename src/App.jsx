import React, { Component } from 'react';
import { connect } from 'react-redux';

// MOCKS
import { taskListMock } from '@utils';

// STYLE
import './app.scss';

// COMPONENTS
import { Project, Topbar } from '@components';
import { LoginPage, HomePage } from '@pages';

class AppContainer extends Component {
	render() {
		return (
			<div className="app">
				<Topbar />
				<HomePage />
				<LoginPage />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	strings: state.strings.data
});

const App = connect(mapStateToProps)(AppContainer);

export default App;
