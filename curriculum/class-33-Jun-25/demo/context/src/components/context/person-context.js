import React from 'react';

// Vinicio - think about this at shared state (between components)
export const PersonContext = React.createContext();

// Vinicio - think about this as the components who defines what the context is
// Vinicio - we can not connect directly to this component
export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.title = "Vladimir Sanchez";
    this.state.twitterHandle = "vladimirsan";
    this.state.email = "vladimirsan@vladimirsan.com";
    // -----------------------------------------------------------------------
    this.state.changeTitle = this.changeTitle;
    this.state.changeTwitterHandle = this.changeTwitterHandle;
    this.state.changeEmail = this.changeEmail;
  }

  changeTitle         = title => this.setState({ title });
  changeTwitterHandle = twitterHandle => this.setState({ twitterHandle });
  changeEmail         = email => this.setState({ email });


  render() {
    // Vinicio - here I'm going to wrap everything into the context
    return (
     <PersonContext.Provider value={this.state}>
       {/*Everything that's inside Context.Provider will have access to its context*/}
       { this.props.children }
     </PersonContext.Provider>
    );
  }
}