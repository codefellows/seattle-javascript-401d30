import React from 'react';
import {connect} from 'react-redux';
import * as actions from './redux/pokemon-actions';

class App extends  React.Component {
  render() {
    return(<p>
      {
        this.props.pokemon ? <>{this.props.pokemon.name} is cute but will fight you</> : null
      }
    </p>);
  }

  componentDidMount() {
    this.props.pPokemonData('snorlax')
      .then(() => console.log('Thunk has been completed'));
  }
}

const mapStoreStateToProps = state => ({
  pokemon : state.pokemon
});

const mapDispatchToProps = dispatch => ({
  pPokemonData: name => dispatch(actions.requestPokemonData(name))
});

export default connect(mapStoreStateToProps, mapDispatchToProps)(App);
