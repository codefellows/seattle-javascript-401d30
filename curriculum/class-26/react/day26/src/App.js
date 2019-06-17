import React from 'react';
import './App.scss'

// Vinicio - in react, components are classes (or functions)

// Vinicio - Footer's prototype is inherited from React.Compontent
// Vinicio - This is a dummy component :(
class Header extends React.Component {
  // Vinicio - every component MUST define a render method
  render() {
    // Vinicio - the render method MUST return JSX (this is not HTML)
    return(
      <header>
        <h1> Day 26 - 401d30 - Cool Beans</h1>
      </header>
    );
  }
}

// Vinicio - This is a dummy component :(
class Footer extends React.Component {
  render() {
    return(
      <div>
        <hr/>
        <footer>
          Code Fellows :)
        </footer>
      </div>
    );
  }
}


class ReverseForm extends React.Component {

  constructor(props) {
    super(props); // Vinicio - think about props as "arguments" to your component
    this.state = { };
    this.state.words = 'Kali is Cute';
    this.state.secretMessage = 'Kali is cuter than....';
  }

  // Vinicio - this HAS to be an arrow function or the function won't be bound to the
  //compontent
  handleClick = event => {
    const reverseWords = this.state.words.split('').reverse().join('');
    this.setState({
      words: reverseWords
    });
  };

  handleChange = event => {
    const changedWords = event.target.value;
    this.setState({ // vinicio - set state is an async function :(
      words: changedWords,
    });
    // Vinicio - in this line, WE can not assume that state has been changed
  };

  // Vinicio - in my render function, I can take values from state
  render() {
    return(
      <div>
        <h3>{ this.state.words }</h3>
        <input value={this.state.words} onChange={this.handleChange}/>
        <button onClick={this.handleClick}> Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  // const Header = new Header();
  // Header.render();
  render() {
    return (
      <main>
        <Header/>
        <ReverseForm/>
        <Footer/>
      </main>
    );
  }
}
export default App;
