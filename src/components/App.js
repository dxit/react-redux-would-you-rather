import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Dashboard from './Dashboard';
import FourZeroFour from './FourZeroFour';
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
						<Switch>
							<Route path="/" exact component={Dashboard}/>
							<Route component={FourZeroFour}/>
						</Switch>
					</Container>
				</Fragment>
			</Router>
		);
	}
}

export default connect()(App);
