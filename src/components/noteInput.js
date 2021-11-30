import React from "react";

const RETURN_KEY_CODE = 13;

class NoteInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: "" };

		// bindings
		this.handleSubmitNote = this.handleSubmitNote.bind(this);
		this.updateInput = this.updateInput.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleSubmitNote() {
		// don't submit empty entries
		if (this.state.input !== '') {
			this.props.submitNote(this.state.input);
			this.setState({ input: "" });
		}
	}

	updateInput(e) {
		this.setState({ input: e.target.value });
	}

	handleKeyDown(e) {
		if (e.keyCode !== RETURN_KEY_CODE) return;
		this.handleSubmitNote();
	}

	render() {
		return (
		<div className="notes_input">
			<input
				autoFocus
				onChange={this.updateInput}
				onSubmit={this.handleSubmitNote}
				onKeyDown={this.handleKeyDown}
				value={this.state.input}
			/>
			<button
				className="add-note-button"
				onClick={this.handleSubmitNote}>
				Add Note
			</button>
		</div>
		)
	}
};

export default NoteInput;
