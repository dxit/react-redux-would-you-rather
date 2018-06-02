import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { Card, Header, Tab, Message } from 'semantic-ui-react'

class Dashboard extends Component {
	render() {
		const {unansweredQuestionsIds, answeredQuestionsIds} = this.props;
console.log(unansweredQuestionsIds.length);
		const panes = [
			{
				menuItem: "Unanswered", render: () =>
					<Tab.Pane attached={false}>
						<Card.Group>
							{unansweredQuestionsIds.length === 0 &&
							<Message
								icon="inbox"
								header="No Questions"
								content="You have answered all the questions"
							/>
							}
							{unansweredQuestionsIds.map((id) => <Question key={id} id={id}/>)}
						</Card.Group>
					</Tab.Pane>
			},
			{
				menuItem: 'Answered', render: () =>
					<Tab.Pane attached={false}>
						{answeredQuestionsIds.length === 0 &&
						<Message
							icon="inbox"
							header="No Questions"
							content="You haven't answered any question"
						/>
						}
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