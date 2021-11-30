import React from "react";

import Person from './person';
import DropDownList from "./dropDownList";

export const OrderBys = {
	FirstName: 'First Name',
	LastName: 'Last Name'
}

export default class PeopleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderBy: OrderBys.FirstName
		}

		this.updateOrderBy = this.updateOrderBy.bind(this);
		this.getOrderedPeople = this.getOrderedPeople.bind(this);
	}

	updateOrderBy(e) {
		this.setState({ orderBy: e.target.value });
	}

	getOrderedPeople() {
		if (this.state.orderBy === OrderBys.None) {
			return this.props.people;
		} else if (this.state.orderBy === OrderBys.FirstName) {
			return this.props.people.sort((p, p2) => {
				if (p.firstName > p2.firstName) return 1;
				if (p.firstName < p2.firstName) return -1;
				return 0;
			});
		} else if (this.state.orderBy === OrderBys.LastName) {
			return this.props.people.sort((p, p2) => {
				if (p.lastName > p2.lastName) return 1;
				if (p.lastName < p2.lastName) return -1;
				return 0;
			});
		}
	}

	render() {
		const orderByOptions = [OrderBys.FirstName, OrderBys.LastName];
		const orderedPeople = this.getOrderedPeople();
		const list_items = orderedPeople.map((p) => <li><Person attributes={p} overwritePerson={this.props.overwritePerson} /></li>)
		return (
			<div>
				<div>
					Order By <DropDownList 
						options={orderByOptions}
						label="people_order_by"
						prompt="Order By"
						onChange={ this.updateOrderBy }
						selectedOption={ this.state.orderBy }
					/>
					<br/>
				</div>
				<pre>
					<ul>{ list_items }</ul>
				</pre>
			</div>
			
		)
	}
};