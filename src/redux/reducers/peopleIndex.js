import { GET_ALL_PEOPLE } from "../actions/personActions";

const initialState = [];

// array of ids to act as quick index
const peopleIndex = (state = initialState, action) => {
	switch(action.type) {
		case GET_ALL_PEOPLE: {
			return [...action.payload.people.map((person) => person.id)];
		}
		default: {
			return state;
		}
	}
};

export default peopleIndex;
