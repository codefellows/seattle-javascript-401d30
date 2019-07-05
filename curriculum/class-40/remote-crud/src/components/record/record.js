import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-jsonschema-form';

import playersSchema from './players.json';

import * as actions from './actions.js';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' },
};

const API = 'http://localhost:3000/api/v1';

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = { schema: {} };
  }

  componentDidMount() {
    const schemas = {
      players: playersSchema,
    };
    this.setState({ schema: schemas[this.props.model] });
  }

  resetPlayer = id => {
    this.setState({ id: null });
  };

  handleSubmit = form => {
    let formData = form.formData;
    let url = `${API}/players`;
    this.props.handlePost(url, formData);
  };

  render() {
    return (
      <div>
        <h3>Edit Record {this.props.id}</h3>
        <Form
          schema={this.state.schema}
          uiSchema={uiSchema}
          formData={this.props.records[this.props.id]}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handlePost: (url, payload) => dispatch(actions.post(url, payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Record);
