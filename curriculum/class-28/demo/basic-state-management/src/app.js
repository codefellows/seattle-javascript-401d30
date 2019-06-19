import React from 'react';

import './styles.scss';
import Form from "./form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
    };
  }

  handleResults = (count , results) => {
    // Making changes to the state to trigger a re-render
    this.setState({count, results});
    //   this.setState({
    //     count: count,
    //     results: results,
    //   });
  };

  render() {
    return (
      <>
        <Form
          message="I find your lack of faith disturbing..."
          handleResults = {this.handleResults}/>
          <ul>
          {
            Object.keys(this.state.results).map((name, mapIndex) =>
              <li key={mapIndex}>
                <a href={this.state.results[name]}>
                  {name}
                </a>
              </li>
            )
          }
          </ul>
      </>
    );
  }
}

export default App;
