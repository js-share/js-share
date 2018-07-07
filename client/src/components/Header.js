import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    if (this.props.auth) {
      // show a link to sign out
      return [
        <li className="nav-item" key={'hello'}>
          <Link className="nav-link " to="/">Home</Link>
        </li>,
        <li><Link
          className="btn btn-success my-2 my-sm-0"
          to="/newdocument"
          role="button"

        >
          New Document</Link></li>,
        <li className="nav-item" key={'documents'}>
          <Link className="nav-link" to="/documents">Documents</Link>
        </li>,
        <li className="nav-item" key={'signout'}>
          <Link className="nav-link float-right" to="/" onClick={this.props.setLoggedOut}>Sign Out</Link>
        </li>
      ];
    }
    else {
      // show a link to sign in or sign up
      return [
        <li className="float-left nav-item" key={'hello'}>
          <Link className="nav-link" to="/">Home</Link>
        </li>,
        <li className="nav-item" key={'signin'}>
          <Link className="nav-link float-right" to="/documents" onClick={this.props.setLoggedIn}>Sign In</Link>
        </li>]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img className="navbar-brand" src="./logo.png" width="80" height="40" alt="logo" />
        </Link>
        <ul className="nav ">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}


export default Header;
