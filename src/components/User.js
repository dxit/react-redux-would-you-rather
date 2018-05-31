import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions/authedUser';
import { Button, Card, Image, Statistic } from 'semantic-ui-react';

class User extends Component {
	handleLogin = (e, id) => {
		e.preventDefault();
		const {dispatch} = this.props;

		dispatch(loginUser(id));
	};

	render() {
		console.log(this.props);
		const {user, authedUser, isLeaderboard, location} = this.props;

		// const {from} = location.state || {from: {pathname: '/'}};
		//
		// if (authedUser !== null) {
		// 	return (
		// 		<Redirect to={from}/>
		// 	);
		// }

		return (
			<Card centered>
				<Card.Content>
					<Image floated="right" circular size="tiny" src={user.avatarURL}/>
					<Card.Header>
						{user.name}
					</Card.Header>
					<Card.Meta>
						@{user.id}
					</Card.Meta>
					{isLeaderboard === true &&
					<Card.Description>
						<Statistic.Group widths="two">
							<Statistic>
								<Statistic.Value>{Object.keys(user.answers).length}</Statistic.Value>
								<Statistic.Label>Answers</Statistic.Label>
							</Statistic>
							<Statistic>
								<Statistic.Value>{user.questions.length}</Statistic.Value>
								<Statistic.Label>Questions</Statistic.Label>
							</Statistic>
						</Statistic.Group>
					</Card.Description>
					}
				</Card.Content>
				{isLeaderboard === false &&
				<Card.Content extra>
					{user.id !== authedUser
						? <Button primary fluid onClick={(e) => this.handleLogin(e, user.id)}>Login</Button>
						: <Button primary fluid disabled>Logged In</Button>
					}
				</Card.Content>
				}
			</Card>
		)
	}
}

function mapStateToProps({authedUser, users}, {id, isLeaderboard}) {
	const user = users[id];

	return {
		user,
		authedUser,
		isLeaderboard
	}
}

export default connect(mapStateToProps)(User);