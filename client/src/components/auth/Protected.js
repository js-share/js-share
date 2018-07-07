import React, { Component } from 'react';
import axios from 'axios';

class Protected extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '', error: null };
  }

  componentDidMount() {
    axios.get('/api/protected', {
      headers: { jwt: sessionStorage.getItem('jwt') || '' }
    })
      .then(response => {
        console.log('setting state...');
        this.setState({ message: response.data.message });
      })
      .catch(error => {
        console.log(error);
        console.log(error.message);
      });
  }

  renderError() {
    if (!this.state.error) return null;
    return <div>{this.state.error}</div>;
  }

  render() {
    return (
      <div>
        <div>{this.state.message || 'loading...'}</div>
        {this.renderError()}
      </div>
    );
  }
}

export default Protected;