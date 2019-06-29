import React from 'react';
import Words from './words.js';
import Form from './form.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: '',
    };
  }

  updateWords = (words) => {
      this.setState({words});
  };

  render() {
    return (
      <React.Fragment>
        <Words words={this.state.words}/>
        <Form handleInboundWords={this.updateWords}/>
      </React.Fragment>
    );
  }
};

export default App;
