import React from "react";

// TODO: use a better component library, no reason 
// to re-invent the wheel for a dropdown
export default class DropDownList extends React.Component {
	constructor(props) {
		super(props);
		this.getSelectedIndex = this.getSelectedIndex.bind(this);
	}

	// hacky - either address this properly or use a component library
	getSelectedIndex() {
		const idx = this.props.options.find((o) => o === this.props.selectedOption);
		return idx ?? 0;
	}

	render() {
		return (
			<div>
				<form>
					<select 
						name={this.props.label}
						id={this.props.label}
						selectedIndex={this.getSelectedIndex()}
						onChange={this.props.onChange}
					>
						{this.props.options.map((o) => {
							return <option value={o}>{ o }</option>
						})}
					</select>
				</form>
			</div>
		);
	}
}