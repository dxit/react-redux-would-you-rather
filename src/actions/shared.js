import {getInitialData} from '../utils/api';
import {setAuthedUser} from './authedUser';
import {showLoading, hideLoading} from 'react-redux-loading';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());

		return getInitialData()
			.then(({users, questions}) => {
				dispatch(hideLoading())
			})
	}
}