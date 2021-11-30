import React from 'react';
import './App.css';
import Person from './components/person';

const swapi = async function(url){
  const response = await fetch(url)
  const data = await response.json();
  return data.results ? data.results : data;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }
  
  async componentDidMount() {          
    const people = await swapi('https://swapi.dev/api/people/');
    this.setState({ people: people });
  }
  
  render() {
	const list_items = this.state.people.map((p) => <li><Person attributes={p} /></li>)
    return (
      <React.Fragment>
        <h1 className="header">Star Wars People</h1>
        <pre>
			<ul>{list_items}</ul>
		</pre>
      </React.Fragment>
    );
  }
};

export default App;