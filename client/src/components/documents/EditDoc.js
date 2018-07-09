import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import SyntaxHighlight from './SyntaxHighlight';

class EditDoc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: false,
      code: 'Adam'
    };

    this.updateCode = this.updateCode.bind(this);
  }

  // Highlight(props) {
  //   const { value, language } = props
  //   const elements = []
  //   let index = 0
  //   const pushElement = (token, style) => {
  //     elements.push(<span className={style || ''} key={++index}>{token}</span>)
  //   }
  //   const mode = CodeMirror.findModeByName(language)
  //   CodeMirror.runMode(value, mode ? mode.mime : language, (token, style) => {
  //     pushElement(token, style)
  //   })
  //   pushElement(tokenBuf, lastStyle)
  //   const code = <code>{elements}</code>
  //   return inline ? code : <pre>{code}</pre>
  // }


  updateCode(newCode) { this.setState({ code: newCode }) }

  render() {
    let options = { lineNumbers: true, mode: 'javascript' };
    return (
      <div>
        <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
        <SyntaxHighlight value='use strict' language='javascript' />
      </div>
    )
  }
}

export default EditDoc;
