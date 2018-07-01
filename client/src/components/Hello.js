import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    
    this.state = {message: ''};
  }
  
  componentDidMount() {
    fetch('/api/hello')
      .then(response => response.json())
      .then(json => {
        this.setState({message: json.message});
      });
  }
  
  render() {
    return (
      <div>
        {this.state.message || 'loading...'}
      </div>
    );
  }
}

export default Hello;
