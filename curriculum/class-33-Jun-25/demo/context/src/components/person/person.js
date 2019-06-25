import React from 'react';
import { PersonContext } from '../context/person-context';

export default class Person extends React.Component {
  // Vinicio - by convention, if we assign a static property called contextType to a component,
  // we connect to context
  static contextType = PersonContext;

  render() {
    return (
      <p>
        King's landing follows the new ways :)
        <h1> {this.context.title} </h1>
        <h2> @{this.context.twitterHandle} </h2>
        <h2> {this.context.email} </h2>
        <form>
          <input
            placeholder="Title"
            name="title"
            onChange={event => this.context.changeTitle(event.target.value)}
            />

          <input
            placeholder="Twitter Handle"
            name="twitterHandle"
            onChange={event => this.context.changeTwitterHandle(event.target.value)}
          />

          <input
            placeholder="email"
            name="email"
            type="email"
            onChange={event => this.context.changeEmail(event.target.value)}
          />
        </form>
      </p>
    );
  }
}
