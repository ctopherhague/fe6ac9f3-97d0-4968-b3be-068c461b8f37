import { combineReducers } from "redux";

import peopleIndex from "./peopleIndex";
import peopleMap from "./peopleMap";
import peopleSort from "./peopleSorts";

export default combineReducers({ peopleIndex, peopleMap, peopleSort });