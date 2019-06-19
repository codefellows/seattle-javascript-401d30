import React from 'react';
import superagent from 'superagent';

const STAR_WARS_URL = 'https://swapi.co/api/people/';

class Form extends React.Component {

  handleSubmit = async event => {
    event.preventDefault();
    const starwarsData = await superagent.get(STAR_WARS_URL);
    const peopleCount = starwarsData.body.count;

    const people = starwarsData.body.results.reduce((currentList, person) => {
        currentList[person.name] = person.url;
        return currentList;
      } ,{});

    this.props.handleResults(peopleCount, people);
  };

  render() {
    return(
      <form>
        <button onClick={this.handleSubmit}>{ this.props.message }</button>
      </form>
    );
  }
}

export default Form;
