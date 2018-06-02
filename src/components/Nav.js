import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';


const Nav = (props) => {
	return (
		<Menu stackable>
			<Menu.Item as={NavLink} to="/" exact activeClassName="active">
				Home
			</Menu.Item>
			<Menu.Item as={NavLink} to="/add" activeClassName="active">
				Add Question
			</Menu.Item>
			<Menu.Item as={NavLink} to="/leaderboard" activeClassName="active">
				Leaderboard
			</Menu.Item>
			<Menu.Menu position="right">
				{props.authedUser !== null &&
				<Fragment>
					<Menu.Item>
						<Fragment>
							<Image src={props.authedUser.avatarURL} size="mini" avatar circular/>
							<span>{props.authedUser.name}</span>
						</Fragment>
					</Menu.Item>
					<Menu.Item as={NavLink} to="/logout" activeClassName="active">
						Logout
					</Menu.Item>
				</Fragment>
				}
			</Menu.Menu>
		</Menu>
	)
};

function mapStateToProps({authedUser, users}) {
	return {
		authedUser: authedUser === null ? null : {
			...users[authedUser]
		}
	}
}

export default withRouter(connect(mapStateToProps)(Nav));