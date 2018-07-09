import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CM from './CodeMirror';
import ConsoleOutput from './ConsoleOutput';

class EditDoc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: false,
      code: '',
      console: '',
      docTitle: ''
    };
    this.updateCode = this.updateCode.bind(this);
    this.runCode = this.runCode.bind(this);
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    })
  }

  runCode() {
    const before = 'var results = []; function logger(value) {results.push(value);}; console.log = logger; ';
    const after = ' results';
    const results = eval('[2+2]');
    // const results = eval(before + 'console.log(3);' + after);
    // const results = eval('2 + 2');
    console.log(results)
    console.log(typeof results);
    console.log('hi3')
    let consoleText = this.state.console;
    results.forEach(result => {
      consoleText += result;
      consoleText += '\n';
    })
    console.log(consoleText);
    this.setState({
      console: consoleText
    })
  }

  componentDidMount() {
    let docId = this.props.location.pathname.slice(9);
    console.log(docId)
    // if docId make axios get request to server for docTitle and sharedUsers
    axios.get(`/api/document/${docId}`)
      .then(res => {
        this.setState({
          init: true,
          docTitle: res.data.name,
          code: res.data.text_content
        });
      }).catch(err => console.log(err));
  }

  render() {
    // let options = { lineNumbers: true, mode: 'javascript' };
    if (!this.state.init) return null;
    return (
      <div className='container'>
        <div className="card-group">
          <div className="card">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="/documents">Cancel</Link>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link active">Save</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">{this.state.docTitle}</h5>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter Code Here</h5>
              <div className="card-text" rows="12">{<CM code={this.state.code} updateCode={this.updateCode} value='use strict' language='javascript' />}</div>
            </div>

          </div>
          <div className="card">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <button className="nav-link disabled">Clear</button>
                  </li>
                  <li className="nav-item">
                    <button onClick={this.runCode} className="nav-link active">Run</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">Console</h5>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">JS</h5>
              <div className="card-text" rows="12">
                <div class="form-group">
                  <textarea class="form-control rounded-0" id="ConsoleOutput" rows="10">{this.state.console}</textarea>
                </div>
                {<ConsoleOutput
                  console={this.state.console}
                  value='use strict'
                  language='javascript' />}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditDoc;
