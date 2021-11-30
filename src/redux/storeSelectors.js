import { SORT_TYPES  } from "../constants/sortTypes";

export const getPeopleIndex = store => store.peopleIndex;

export const getPersonById = (store, id) => ({...store.personMapReducer[id], id});

export const getActiveSort = store => store.peopleSortReducer;

export const getAllPeople = store => {
	const peopleList = getPeopleIndex(store);
	if (!peopleList.length) return {};

	const activeSort = getActiveSort(store);
	const unsortedList = peopleList.map(id => getPersonById(store, id));

	switch(activeSort) {
		case SORT_TYPES.FirstName: {
			return unsortedList.sort((p, p2) => {
				if (p.firstName > p2.firstName) return 1;
				if (p.firstName < p2.firstName) return -1;
				return 0;
			});
		}
		case SORT_TYPES.LastName: {
			return unsortedList.sort((p, p2) => {
				if (p.lastName > p2.lastName) return 1;
				if (p.lastName < p2.lastName) return -1;
				return 0;
			});
		}
		default: return unsortedList;
	}
}