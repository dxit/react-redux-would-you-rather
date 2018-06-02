import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { Card, Header, Tab } from 'semantic-ui-react'

class Dashboard extends Component {
	render() {
		const {unansweredQuestionsIds, answeredQuestionsIds} = this.props;

		const panes = [
			{
				menuItem: 'Unanswered', render: () =>
					<Tab.Pane attached={false}>
						<Card.Group>
							{unansweredQuestionsIds.map((id) => <Question key={id} id={id}/>)}
						</Card.Group>
					</Tab.Pane>
			},
			{
				menuItem: 'Answered', render: () =>
					<Tab.Pane attached={false}>
						{answeredQuestionsIds.map((id) => <Question key={id} id={id}/>)}
					</Tab.Pane>
			}
		];

		return (
			<div>
				<Header as="h2">Dashboard</Header>
				<Tab menu={{secondary: true, pointing: true}} panes={panes}/>
			</div>
		)
	}
}

function mapStateToProps({questions, authedUser}) {
	return {
		unansweredQuestionsIds: Object.keys(questions)
			.filter((i) => !questions[i].optionOne.votes.includes(authedUser) && !questions[i].optionTwo.votes.includes(authedUser))
			.sort((a, b) => questions[b].timestamp - questions[a].timestamp),
		answeredQuestionsIds: Object.keys(questions)
			.filter((i) => questions[i].optionOne.votes.includes(authedUser) || questions[i].optionTwo.votes.includes(authedUser))
			.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
	}
}

export default connect(mapStateToProps)(Dashboard);