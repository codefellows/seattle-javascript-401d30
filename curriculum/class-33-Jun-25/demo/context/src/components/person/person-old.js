import React from 'react';
import { PersonContext } from '../context/person-context';

export default class ContextProvider extends React.Component {
  render() {
    return (
      <>
        <PersonContext.Consumer>
          {
            context => {
              return(
                <>
                  <p>The north follows the old ways</p>
                  <p> { context.message }</p>
                </>
              )
            }
          }
        </PersonContext.Consumer>
        <p> This has no context :(. It's all alone</p>
      </>
    );
  }
}
