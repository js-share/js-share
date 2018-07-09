import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import js from 'codemirror/mode/javascript/javascript';

const ConsoleOutput = (props) => {
  let options = { readOnly: false }
  console.log('CO', props.console);
  return (
    <CodeMirror
      value={props.console}
      options={options}
      language='javascript'
    />
  )
}

export default ConsoleOutput;