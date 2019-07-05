import React from 'react';
import {connect} from "react-redux";

class ConnectedComponent extends React.Component  {
  render(){
    return(
      <>
        <ul>
        {
          this.props.categories.map(category => <li key={category.name}> {category.name} </li>)
        }
        </ul>
      </>
    );
  }
}

const mapStoreStateToProps = state => ({
  // Vinicio - this is connected to main-reducer.js
  categories: state.categories,
  cards: state.cards,
});

export default connect(mapStoreStateToProps)(ConnectedComponent);