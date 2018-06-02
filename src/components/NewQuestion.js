import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Header, Button, Form } from 'semantic-ui-react'

class NewQuestion extends Component {
	state = {
		optionOneText: '',
		optionTwoText: '',
		loading: false
	};

	handleChanges = (e, {name, value}) => {
		this.setState({
			[name]: value
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const {optionOneText, optionTwoText} = this.state;
		const {dispatch} = this.props;

		dispatch(handleAddQuestion({optionOneText, optionTwoText}))

		this.setState({
			optionOneText: '',
			optionTwoText: ''
		});

		this.props.history.push(`/`);
	};

	render() {
		const {optionOneText, optionTwoText, loading} = this.state;

		return (
			<Fragment>
				<Header as="h2" textAlign="center">Would You Rather</Header>
				<Form loading={loading} onSubmit={this.handleSubmit}>
					<Form.Group unstackable widths={2}>
						<Form.Input label="Option One" name="optionOneText" value={optionOneText} placeholder="Add the Option One" onChange={this.handleChanges} />
						<Form.Input label="Option One" name="optionTwoText" value={optionTwoText} placeholder="Add the Option Two" onChange={this.handleChanges} />
					</Form.Group>
					<Form.Group unstackable widths={1}>
						<Form.Button content="Add New Question" disabled={optionOneText === '' || optionTwoText === ''} />
					</Form.Group>
				</Form>
			</Fragment>
		)
	}
}

function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(NewQuestion);