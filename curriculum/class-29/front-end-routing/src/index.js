import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';

class Main extends  React.Component {
  render(){
    // This gives you front-end routes. THis has to happen only once
    return (
      <BrowserRouter>
      <App/>
    </BrowserRouter>);
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main/>, rootElement);