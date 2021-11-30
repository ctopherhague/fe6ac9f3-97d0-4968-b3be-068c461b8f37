import React, { useEffect } from "react";
import { connect } from "react-redux";

import { sendGetAllPeople } from "../redux/actions/personActions";
import {  getPeople } from "../redux/storeSelectors";

import Person from './person';
import DropDownList from "./dropDownList";

export const OrderBys = {
	FirstName: 'First Name',
	LastName: 'Last Name'
}

const PeopleList = ({ people, sendGetAllPeople }) => {
	// Cheap hack to kick of a fetch on page load -
    // not maintainable or discoverable. This could
    // be its own component with "loading" or "fetching"
    // state
	useEffect(() => {
		async function fetchData() {
			sendGetAllPeople();
		}
		fetchData();
	}, []);

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
				<ul>{ people.map((p) => <li><Person attributes={p} /></li>)}</ul>
			</pre>
		</div>
		
	);
};


const mapStateToProps = state => {
	const sortedPeople = getPeople(state);
	return { people: sortedPeople };
}

export default connect(mapStateToProps, { sendGetAllPeople })(PeopleList);