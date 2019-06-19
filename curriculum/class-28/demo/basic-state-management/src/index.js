import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

class Main extends React.Component {
  render() {
    return <App/>;
  }
};

// Vinicio - this is where we connect to the real DOM

const rootElement = document.getElementById('root');
ReactDom.render(<Main/>, rootElement);