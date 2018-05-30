import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Tab } from 'semantic-ui-react'

class Dashboard extends Component {
	render() {
		const panes = [
			{ menuItem: 'Answered', render: () => <Tab.Pane attached={false}>This is a test</Tab.Pane> },
			{ menuItem: 'Unanswered', render: () => <Tab.Pane attached={false}>This is a test</Tab.Pane> }
		];

		return (
			<div>
				<Header as="h2">Dashboard</Header>
				<Tab menu={{ secondary:true, pointing: true }} panes={panes} />
			</div>
		)
	}
}

export default connect()(Dashboard);