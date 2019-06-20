import React from 'react';
import {Route} from 'react-router-dom';

import Home from '../Home/Home';
import List from '../List/List';

export default class Main extends React.Component{
  render() {
    return(
      <main>
        <Route exact path="/" component={Home}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/message" render={() => <p>Horror!</p>}/>
      </main>
    );

  }
}
