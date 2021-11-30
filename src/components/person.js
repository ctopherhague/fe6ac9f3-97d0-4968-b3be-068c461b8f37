import React from 'react';
import NoteInput from './noteInput';

class Person extends React.Component {
	constructor(props) {
		super(props);
		this.state = {notes: []};

		// bindings
		this.addNote = this.addNote.bind(this);
	}

	addNote(note) {
		this.setState((state) => ({
			notes: [...state.notes, note],
		}));
	}

	render() {
		return (
			<>
				<div className="person">
					<h2>{this.props.attributes.name}</h2>
					<div>Hair Color: {this.props.attributes.hair_color}</div>
					<div>Skin Color: {this.props.attributes.skin_color}</div>
					<div>Eye Color: {this.props.attributes.eye_color}</div>
					<h3>Notes</h3>
					<ul>
						{this.state.notes.map((n) => 
							<li><div className="note">{ n }</div></li>
						)}
					</ul>
					{/* TODO */}
				</div>
				<NoteInput submitNote={this.addNote} />
			</>
		)
	}
};

export default Person;