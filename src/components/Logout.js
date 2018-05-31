import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../actions/authedUser';

const Logout = (props) => {
	const {dispatch} = props;
	dispatch(logoutUser());

	return (
		<Redirect to="/"/>
	)
};

export default connect()(Logout);