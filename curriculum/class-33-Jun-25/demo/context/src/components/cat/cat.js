import React from 'react';
import { CatContext } from '../context/cat-context';

export default class Cat extends React.Component {
  static contextType = CatContext;
  render() {
    return (
      <p>
        <hr/>
        <p>
          :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3
        </p>
        {this.context.name}
        <p>
          :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3
        </p>
        <hr/>
      </p>
    );
  }
}
