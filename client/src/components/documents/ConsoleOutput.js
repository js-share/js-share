import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import js from 'codemirror/mode/javascript/javascript';


class ConsoleOutput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: 'RESULT'
    }
    this.udpatedCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    this.setState({
      code: 'RESULT',
    })
  }

  render() {
    let options = { readOnly: true }

    return (
      <CodeMirror
        value={this.state.code}
        onChange={this.udpateCode}
        options={options}
        language='javascript'
      />
    )
  }

}

export default ConsoleOutput;