import React from 'react';

import socketIoClient from 'socket.io-client';
const API_URL = 'http://localhost:3000';
const socket = socketIoClient.connect(API_URL);

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // messages: [],
      lastMessage: '',
      text: '',
    };

    socket.on('incoming', payload => {
      // this.setState(oldState => ({
      //   messages: [...oldState.messages, payload],
      // }));
      this.setState({lastMessage: payload});
    });
  }

  handleChange = event => {
    this.setState({text: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();

    socket.emit('chat', this.state.text);
  };

  render(){
    return(
      <>
        <h2> CHAT </h2>
        {/*<ul>*/}
        {/*{*/}
        {/*  this.state.messages.map(message => <li key={message}>{message}</li>)*/}
        {/*}*/}
        {/*</ul>*/}
        {this.state.lastMessage}
        <form onSubmit={this.handleSubmit}>
          <input name="text" onChange={this.handleChange}/>
        </form>
      </>
    );
  };
}