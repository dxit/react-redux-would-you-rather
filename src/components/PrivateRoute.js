import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Login from './Login';

const PrivateRoute = ({component: Component, ...props}) => {
	const isUserAuthed = () => {
		const {authedUser} = props;
		return authedUser !== null;
	};

	return (
		<Route {...props} render={(p) => (
			<Fragment>
				{isUserAuthed() ? <Component {...p} /> : <Login/>}
			</Fragment>
		)}/>
	)
};


function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(PrivateRoute);