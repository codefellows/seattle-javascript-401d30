import React from 'react';
import io from 'socket.io-client';

const url = 'http://localhost:3000';
const socket = io.connect(url);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedInput: '',
    };
    socket.on('incoming', payload => this.updateWords(payload));
  }

  updateWords = words => {
    this.props.handleInboundWords(words);
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    socket.emit('chat', this.state.typedInput);
  };

  handleNewWords = event => {
    this.setState({ typedInput: event.target.value });
  };

  render() {
    return (
      <>
        <h2>{this.state.words}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="typedInput"
            placeholder="New Words"
            onChange={this.handleNewWords}
          />
        </form>
      </>
    );
  }
}

export default Form;
