import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { Header, Card } from 'semantic-ui-react'

class Login extends Component {
	render() {
		const {usersIds} = this.props;

		return (
			<Fragment>
				<Header as="h1">Login Required</Header>
				<Header as="h3">Please, select a user to login</Header>
				<p>Only logged users can vote, submit new questions or view leaderboards.</p>
				<p>&nbsp;</p>
				<Card.Group>
					{usersIds.map((id) => (
						<User key={id} id={id} isLeaderboard={false} />
					))}
				</Card.Group>
			</Fragment>
		)
	}
}

function mapStateToProps({users}) {
	return {
		usersIds: Object.keys(users)
			.sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
	}
}

export default connect(mapStateToProps)(Login);