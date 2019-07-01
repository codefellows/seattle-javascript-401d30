import React from 'react';
import {connect} from 'react-redux'; // Vinicio - connect is a curried function
import * as personActions from '../../redux/person-actions';
import Name from "../name/name";

class ChangeName extends  React.Component {
  render() {
    // Vinicio - since we only have one reducer, we don't have to specify which one
    const {handleChange, handleReset} = this.props;
    return(
      <>
        <button onClick={() => handleChange('Jon Stark: King in the NORTH!')}>Change my name</button>
        <button onClick={handleReset}>Reset my name</button>
        <Name/>
      </>
    );
  }
}

// Vinicio - this function lets you get values from the store
// const mapStoreStateToProps = state => {};

// Vinicio - this function lets you dispatch actions
// Vinicio - you could have access to getState
const mapDispatchToProps = (dispatch) => ({
  handleChange : newName => dispatch(personActions.change(newName)),
  handleReset : () => dispatch(personActions.reset(null)),
});

export default connect(null, mapDispatchToProps)(ChangeName);
