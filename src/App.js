import React from 'react';
import './App.css';
import PeopleList from './components/peopleList';

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
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };

	this.overwritePerson = this.overwritePerson.bind(this);
  }

  // hacky state update until I commit a redux'd solution
  // just submit something working then improve it. 
  overwritePerson(personToOverwrite) {
	  const peopleWithoutP = this.state.people.filter((p) => p.index !== personToOverwrite.index);
	  this.setState({ people: [...peopleWithoutP, personToOverwrite]})
  }

  // TODO: data fetching and cleaning should be defined in a utility function
  // outside of component.
  async componentDidMount() {          
    const people = await swapi('https://swapi.dev/api/people/');
	const convertedPeople = people.map((p, idx) => {
		const [firstName, lastName] = splitFullName(p.name)
		const notes = [];
		return {...p, index: idx,  firstName, lastName, notes}
	})
    this.setState({ people: convertedPeople });
  }
  
  render() {
	
    return (
      <React.Fragment>
        <h1 className="header">Star Wars People</h1>
        <PeopleList
			people={ this.state.people }
			overwritePerson={ this.overwritePerson } 
		/>
      </React.Fragment>
    );
  }
};

export default App;