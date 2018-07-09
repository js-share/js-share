import React from 'react';
import CodeMirror from 'react-codemirror'
import 'codemirror/addon/runmode/runmode'
import 'codemirror/mode/meta'
import 'codemirror/mode/javascript/javascript'
import Highlighter from 'react-codemirror-runmode'

const SyntaxHighlight = (props) => {
  // const { value, language } = props

  return (
    <Highlighter className='container w-60'
      codeMirror={CodeMirror}
      theme='solarized'
      value={props.code}
      language='javascript'
    />
  )
}
export default SyntaxHighlight;