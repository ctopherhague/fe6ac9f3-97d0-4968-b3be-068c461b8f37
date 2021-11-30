import React from 'react';

class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {notes: []};
	}

	// TODO
	// addNote(note) {
	// 	this.setState((state) => ({
	// 		notes: [...state.notes, note],
	// 	}));
	// }

	render() {
		return (
			<div>
				<h2>{this.props.attributes.name}</h2>
				<div>{this.props.attributes.hair_color}</div>
				<div>{this.props.attributes.skin_color}</div>
				<div>{this.props.attributes.eye_color}</div>
				<h3>notes</h3>
				{/* TODO */}
			</div>
		)
	}
};

export default Person;