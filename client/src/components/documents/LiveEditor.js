import React, { Component } from 'react';
import HighLight from 'react-syntax-highlight';


class LiveEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'value': 'placeholder'
    };
  }

  render() {
    return (
      <div className="container">
        <h5>Live Editor</h5>
      <div>
          <HighLight
            lang={'javascript'}
            value={this.state.value}
          />
          <pre>
            <code
              className='hljs textarea'
              contentEditable='true'
              spellCheck='false'
              onInput={e => this.setState({ value: e.target.innerText })}>
              {this.state.value}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}
export default LiveEditor;