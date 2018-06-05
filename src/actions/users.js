import { formatUser } from '../utils/helpers';
import { loginUser } from './authedUser';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}

function addUser(user)   {
	return {
		type: ADD_USER,
		user
	}
}

export function handleAddUser(params)    {
	return(dispatch) => {
		const user = formatUser(params);
		dispatch(addUser(user));
		dispatch(loginUser(user.id));
	}
}