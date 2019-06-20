import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
  render() {
    return(
      <header>
        Welcome to our Routes Demo (Khal is great)
        <ul>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/message">Message</Link></li>
          <li><a href="http://www.vladimirsan.com">My Blog</a></li>
        </ul>
      </header>
    );
  }
}
