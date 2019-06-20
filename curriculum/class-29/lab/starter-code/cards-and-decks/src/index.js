import React from 'react';
import ReactDOM from 'react-dom';
import content from './content.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: content,
    };
  }

  render() {
    return <div>Some awesome cards and decks in here ...</div>;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
