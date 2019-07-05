import React from 'react';
import {connect} from 'react-redux';
import Form from 'react-jsonschema-form';

import {postRequest} from './redux/record-actions';

class Record extends React.Component {

  componentDidMount() {
    // Vinicio - I only need to do this when I want something to happen as soon as
    // the component mounts
  }

  handleSubmit = form => {
    const API_URL = 'https://api-js401.herokuapp.com/api/v1/players';
    this.props.handlePost(API_URL, form.formData);
  }

  render(){
    return(<p>I will be a form soon :)</p>);
  }
}


const mapStoreStateToProps = state => ({
  records: state.records,
});

const mapDispatchToProps = dispatch => {
  return {
   handlePost: (url, payload) => dispatch(postRequest(url, payload)),
  };
};


export default connect(mapStoreStateToProps, mapDispatchToProps)(Record);

