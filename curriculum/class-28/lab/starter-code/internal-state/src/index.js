import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>Name: </div>
          <div># of Updates: </div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
