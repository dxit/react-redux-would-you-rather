import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { Header, Card } from 'semantic-ui-react';

class Leaderboard extends Component {
	render() {
		const {usersIds} = this.props;

		return (
			<Fragment>
				<Header as='h2'>Leaderboard</Header>
				<p>&nbsp;</p>
				<Card.Group>
					{usersIds.map((id) => (
						<User key={id} id={id} isLeaderboard={true} />
					))}
				</Card.Group>
			</Fragment>
		)
	}
}

function mapStateToProps({users})   {
	return {
		usersIds: Object.keys(users)
			.sort((a,b) => (users[b].answers.length + users[b].questions.length) - (users[a].answers.length + users[a].questions.length))
	};
}

export default connect(mapStateToProps)(Leaderboard);