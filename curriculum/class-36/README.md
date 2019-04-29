# Context API

## Learning Objectives

**Students will be able to ...**

* Use the React Context API to tactically manage global state.

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## Computer Science Concept:
* General Web Security

## Main Topic:

### Context
Context provides a means of passing state down the component tree through a Provider/Consumer relationship.

At as high a level as makes sense, a "provider" can make it's state available, along with means of altering it (methods). 

```
import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeTitleTo: this.changeTitleTo,
      title: 'My Amazing Website',
    };
  }

  changeTitleTo = title => {
    this.setState({ title });
  };

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;

```

At the app level ...
```
<SettingsContext>
  <Content />
</SettingsContext>
``` 

At the lower levels any component can "opt-in" and become a "consumer" and receive state and potentially methods through it.  Note the wrapping of context in a component, and the requirement of using a function to "get" the context object itself, which is `this.state` from the provider component.
```
<SettingsContext.Consumer>
  {context => {
    console.log(context);
  return (
    <div>
      <h1>{context.title}</h1>
      <button onClick={() => context.changeTitleTo('Your Website')}>
        Change Title
      </button>
    </div>
  );
  }}
</SettingsContext.Consumer>
```


