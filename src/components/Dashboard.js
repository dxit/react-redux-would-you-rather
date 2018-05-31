import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Tab } from 'semantic-ui-react'

class Dashboard extends Component {
	render() {
		const panes = [
			{ menuItem: 'Unanswered', render: () => <Tab.Pane attached={false}>This is a test</Tab.Pane> },
			{ menuItem: 'Answered', render: () => <Tab.Pane attached={false}>This is a test</Tab.Pane> }
		];

		return (
			<div>
				<Header as="h2">Dashboard</Header>
				<Tab menu={{ secondary:true, pointing: true }} panes={panes} />
			</div>
		)
	}
}

function mapStateToProps({questions}) {
	return {
		questionsIds: Object.keys(questions).sort((a,b) => {
			questions[b].timestamp - questions[a].timestamp
		})
	}
}

export default connect(mapStateToProps)(Dashboard);