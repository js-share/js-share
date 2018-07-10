import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client';

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
    this.clearConsole = this.clearConsole.bind(this);
    this.saveCode = this.saveCode.bind(this);
  }

  saveCode() {
    let docId = this.props.location.pathname.slice(9);
    axios.put(`/api/document/${docId}`, { text_content: this.state.code })
      .then(res => {
        console.log('Success', res.data)
      }).catch(err => console.log(err));
  }

  clearConsole() {
    this.setState({
      console: ''
    })
  }

  updateCode(e) {

    let docId = this.props.location.pathname.slice(9);
    // socket broadcast to others
    this.socket.emit('edit text', { docId, text: e.target.value });

    // set our own state
    this.setState({
      code: e.target.value
    })
  }

  runCode() {
    console.log('hi begin');
    
    const before = 'var results = []; function logger(value) {results.push(value);}; var console = {}; console.log = logger; ';
    const after = '; results';
    const results = eval(before + this.state.code + after);
    
    console.log(results)
    console.log(typeof results);
    console.log('hi end');
    
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

        // set up sockets
        this.socket = io();
        this.socket.on('connect', () => {
          // emit join doc on connect
          this.socket.emit('join doc', { docId });
        });

        // receive others' socket text broadcast event
        this.socket.on('receive text', data => {
          this.setState({
            code: data.text
          });
        });

      }).catch(err => console.log(err));
  }

  componentWillUnmount() {
    // if no socket to close, then return
    if (!this.socket) return;

    let docId = this.props.location.pathname.slice(9);
    this.socket.emit('leave doc', { docId });
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
                    <button onClick={this.saveCode} className="nav-link active">Save</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">{this.state.docTitle}</h5>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter Code Here</h5>
              <div className="card-text" rows="12">
                <textarea className="form-control rounded-0" style={{fontFamily: 'monospace'}} value={this.state.code} onChange={this.updateCode} id="DocText" rows="10"></textarea>
              </div>
            </div>

          </div>
          <div className="card">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <button onClick={this.clearConsole} className="nav-link disabled">Clear</button>
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
                <div className="form-group">
                  <textarea className="form-control rounded-0" style={{fontFamily: 'monospace'}} value={this.state.console} id="ConsoleOutput" rows="10"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditDoc;
