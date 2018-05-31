import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { Header, Card } from 'semantic-ui-react'

class Login extends Component {
	render() {
		const {location} = this.props;

		return (
			<div>
				<Header as="h1">Login Required</Header>
				<Header as="h3">Please, select a user to login</Header>
				<p>Only logged users can vote, submit new questions or view leaderboards.</p>
				<p>&nbsp;</p>
				<Card.Group>
					{this.props.userIds.map((id) => (
						<User key={id} id={id} isLeaderboard={false} location={location} />
					))}
				</Card.Group>
			</div>
		)
	}
}

function mapStateToProps({users}) {
	return {
		userIds: Object.keys(users)
			.sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
	}
}

export default connect(mapStateToProps)(Login);