import { saveUser } from '../utils/api';
import { loginUser } from './authedUser';
import { hideLoading, showLoading } from 'react-redux-loading';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}

function addUser(user) {
	return {
		type: ADD_USER,
		user
	}
}

export function handleAddUser(params) {
	return (dispatch) => {

		dispatch(showLoading());

		return saveUser(params)
			.then((user) => {
				dispatch(addUser(user));
				dispatch(loginUser(user.id));
			})
			.then(() => dispatch(hideLoading()));
	}
}