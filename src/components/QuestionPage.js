import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Question from './Question';
import FourZeroFour from './FourZeroFour';
import { Header, Button, Icon } from 'semantic-ui-react'

class QuestionPage extends Component {
	render() {
		const {question} = this.props;

		if (question === null) {
			return (
				<FourZeroFour/>
			)
		}

		return (
			<Fragment>
				<Header as='h2' textAlign='center'>Would You Rather</Header>

				<Question id={question.id} details={true}/>

				<Button as={Link} to='/' animated='fade'>
					<Button.Content visible>Back to Home</Button.Content>
					<Button.Content hidden>
						<Icon name='home'/>
					</Button.Content>
				</Button>
			</Fragment>
		)
	}
}

function mapStateToProps({questions}, props) {
	const {id} = props.match.params;
	const question = questions[id];

	return {
		question: question || null
	}
}

export default connect(mapStateToProps)(QuestionPage);