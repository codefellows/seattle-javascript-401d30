import React from 'react';
import {connect} from 'react-redux'; // Vinicio - connect is a curried function

class Name extends  React.Component {
  render() {
    // Vinicio - since we only have one reducer, we don't have to specify which one
    return(
      <>
        <h2>My name is {this.props.name} </h2>
        {/*<h2>My name is {this.props.state.name} </h2>*/}
      </>
    );
  }
}

// Vinicio - this function lets you get values from the store
const mapStoreStateToProps = state => ({
  // Vinicio - every key you return will become a new prop
  name: state.name,
  // state: state,
});

// Vinicio - this function lets you dispatch actions
const mapDispatchToProps = () => {};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Name);