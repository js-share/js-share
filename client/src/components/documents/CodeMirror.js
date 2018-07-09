import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import '../../../node_modules/codemirror/lib/codemirror.css';

class CM extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: 'placeholder'
    }
    this.udpatedCode = this.updateCode.bind(this);
  }

  updateCode(newCode) {
    this.setState({
      code: newCode,
    })
  }

  render() {
    let options = { lineNumbers: true }

    return (
      <CodeMirror
        value={this.state.code}
        className='container w-60'
        onChange={this.udpateCode}
        options={options}
        language='javascript'
      />
    )
  }

}

export default CM;