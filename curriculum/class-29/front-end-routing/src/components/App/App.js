import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

export default class App extends React.Component{
  render() {
    return(
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
}

