import React from 'react';

import RecordList from './record/list.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Players</h2>
        <RecordList model="players" />
      </div>
    );
  }
}

export default App;
