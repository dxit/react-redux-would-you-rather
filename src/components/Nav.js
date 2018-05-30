import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';


const Nav = (props) => {
	return (
		<Menu stackable>
			<Menu.Item>
				<Image src="http://marketline.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" size="mini" circular/>
			</Menu.Item>
			<Menu.Item as={NavLink} to="/" exact activeClassName="active">
				Home
			</Menu.Item>
			<Menu.Item as={NavLink} to="/leaderboard" activeClassName="active">
				Leaderboard
			</Menu.Item>
			<Menu.Menu position="right">
				<Menu.Item>
					Login
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	)
};

function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(Nav);