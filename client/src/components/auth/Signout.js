import React, {Component} from 'react';

class Signout extends Component {
  componentDidMount() {
    this.props.signoutUser();
  }

  render() {
    return <div>Sorry to see you go...</div>;
  }
}

export default Signout;
