import React from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import js from 'codemirror/mode/javascript/javascript';


const CM = (props) => {
  let options = { lineNumbers: true, mode: 'javascript' }
  console.log('CM', props.code)
  return (
    <CodeMirror
      value={props.code}
      onChange={props.updateCode}
      options={options}
      language='javascript'
    />
  )
}

export default CM;