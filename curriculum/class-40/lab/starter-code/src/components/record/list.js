import React from "react";
import { connect } from "react-redux";

import style from "./record.module.scss";

import Record from "./record.js";

import * as actions from "./actions.js";

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }

  deleteRecord = id => {
    this.props.handleDelete({ model: this.props.model, id: id });
  };

  editRecord = id => {
    this.setState({ id });
  };

  reset = () => {
    let id = null;
    this.setState({ id });
  };

  render() {
    return (
      <div className={style}>
        <button onClick={this.reset}>Add New</button>
        <ul className={style.list}>
          {this.props.records[this.props.model].map((record, idx) => (
            <li key={idx}>
              {record.name}
              <button onClick={() => this.editRecord(idx)}>Edit</button>
              <button onClick={() => this.deleteRecord(idx)}>Delete</button>
            </li>
          ))}
        </ul>
        <Record model={this.props.model} id={this.state.id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  records: state.records
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleDelete: id => dispatch(actions.destroy(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Records);
