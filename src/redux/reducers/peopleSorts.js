import { SORT_TYPES } from "../../constants/sortTypes";
import { SET_SORT } from "../actions/sortActions";

const initialState = SORT_TYPES.FirstName;

const peopleSortReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SORT: {
			return action.payload.sort;
		}
		default: {
			return state;
		}
	}
};

export default peopleSortReducer;