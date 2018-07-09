import CodeMirror from 'codemirror'
import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'
import 'codemirror/mode/javascript/javascript'
import Highlighter from 'react-codemirror-runmode'
import React from 'react';


const SyntaxHighlight = () => (
  <Highlighter
    codeMirror={CodeMirror}
    theme='solarized'
    value='console.log(adam)'
    language='javascript'
  />
)

export default SyntaxHighlight;