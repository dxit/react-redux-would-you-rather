import React, { Component } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react'

class FourZeroFour extends Component {
	render() {
		return (
			<Grid columns={2}>
				<Grid.Row>
					<Grid.Column>
						<Image src="https://static1.squarespace.com/static/51cdafc4e4b09eb676a64e68/t/57a119e3f5e23161e8daf73d/1470175723578/?format=500w" />
					</Grid.Column>
					<Grid.Column textAlign="center" verticalAlign="middle">
						<Header as="h1">
							Awww...Don’t Cry.
						</Header>
						<Header as="h3">It's just a 404 Error!</Header>
						<p>What you’re looking for may have been misplaced in Long Term Memory.</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

export default FourZeroFour;