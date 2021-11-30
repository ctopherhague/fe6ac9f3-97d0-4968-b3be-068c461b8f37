let convertedPeople = []

const swapi = async function(url){
	const response = await fetch(url)
	const data = await response.json();
	return data.results ? data.results : data;
};
  
// TODO: unsafe naming convention assumption
// product discovery, unit testing, defined outliers
// future proof for middle names, etc...
const splitFullName = function(fullName) {
	const nameArr = fullName.split(' ');
	const firstName = nameArr[0] ?? '';
	const lastName = nameArr[1] ?? '';
	return [firstName, lastName];
}

export default class PeopleApiMock {
	async getAllPeople() {
		if (!convertedPeople.length) {
			const people = await swapi('https://swapi.dev/api/people/');
			convertedPeople = people.map((p, idx) => {
				const [firstName, lastName] = splitFullName(p.name)
				const notes = [];
				return {...p, index: idx,  firstName, lastName, notes}
			})
		}
		return Promise.resolve(convertedPeople);
	}

	async post(personToUpdate) {
		const peopleWithoutP = convertedPeople.filter((p) => p.index !== personToUpdate.index);
		convertedPeople = [...peopleWithoutP, personToUpdate];
		return Promise.resolve();
	}
}