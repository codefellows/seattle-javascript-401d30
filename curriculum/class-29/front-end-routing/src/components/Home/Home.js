import React from 'react';
import If from '../If/If';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.showMessage = false;
  }

  handleClick = event => {
    event.preventDefault();

    this.setState(previousState => ({
      showMessage: !previousState.showMessage,
    }), () => {
      console.log('I know for a fact that state has been changed');
    });
  };

  render() {
    const buttonText = this.state.showMessage ? "Hide" : "Show";
    return (
      <div>
        This is the home of the application
        <If condition={this.state.showMessage}>
          <p>This is the biggest secret of my life: I love kali!</p>
          Cute Cats:
          <ul>
            <li>Gregor</li>
            <li>Hound</li>
            <li>Khal</li>
          </ul>
        </If>
        <button onClick={this.handleClick}> {buttonText} Message</button>
      </div>
    );
  }
}
