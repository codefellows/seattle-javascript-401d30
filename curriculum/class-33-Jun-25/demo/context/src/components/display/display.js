import React from 'react';
import { PersonContext } from '../context/person-context';

export default class Display extends React.Component {
  static contextType = PersonContext;
  render() {
    return (
      <p>
        <hr/>
        Don't mind me, I'm just showing the values
        <h1> {this.context.title} </h1>
        <h2> @{this.context.twitterHandle} </h2>
        <h2> {this.context.email} </h2>
        <hr/>
      </p>
    );
  }
}
