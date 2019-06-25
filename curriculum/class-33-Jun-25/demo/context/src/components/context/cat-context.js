import React from 'react';

// 1 - Create your context
export const CatContext = React.createContext();

// 2 - Create a class that defines the shape of your context
export default class CatContextProvider extends React.Component {
  constructor(props) {
    super(props);

    // 3 - Add properties to your state. THis will become your context
    this.state = {};
    this.state.name = "Gregor";
    this.state.cute = true;
    // -----------------------------------------------------------------------
    this.state.changeName = this.changeName;
  }

  changeName = name => this.setState({ name });

  render() {
    // 4 - Wrap your children with context
    return (
      <CatContext.Provider value={this.state}>
        { this.props.children }
      </CatContext.Provider>
    );
  }
}
