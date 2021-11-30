import React from 'react';
import NoteInput from './noteInput';

export default class Person extends React.Component {
	constructor(props) {
		super(props);

		// bindings
		this.addNote = this.addNote.bind(this);
	}

	addNote(note) {
		this.props.overwritePerson({ ...this.props.attributes, notes: [...this.props.attributes.notes, note]});
	}

	// TODO: only render note input if the element is clicked/focused/expanded
	// redundant to render a text entry for each list item
	render() {
		return (
			<>
				<div className="person">
					<h2>{this.props.attributes.firstName} {this.props.attributes.lastName}</h2>
					<div>Hair Color: {this.props.attributes.hair_color}</div>
					<div>Skin Color: {this.props.attributes.skin_color}</div>
					<div>Eye Color: {this.props.attributes.eye_color}</div>
					<h3>Notes</h3>
					<ul>
						{this.props.attributes.notes.map((n) => 
							<li><div className="note">{ n }</div></li>
						)}
					</ul>
				</div>
				<NoteInput submitNote={this.addNote} />
			</>
		)
	}
};
