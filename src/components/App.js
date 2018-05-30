import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Dashboard from './Dashboard';
import { Container } from 'semantic-ui-react'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		return (
			<Router>
				<Fragment>
					<Nav/>
					<Container>
						<Route path="/" exact component={Dashboard}/>
					</Container>
				</Fragment>
			</Router>
		);
	}
}

export default connect()(App);
