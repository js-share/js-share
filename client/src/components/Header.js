import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  renderLinks() {
    if (this.props.auth === null) {
      return <div></div>
    }

    if (this.props.auth) {
      return [
        <li className="nav-item" key={'hello'}>
          <Link className="nav-link " to="/">Home</Link>
        </li>,
        <li className="nav-item" key={'documents'}>
          <Link className="nav-link" to="/documents">Documents</Link>
        </li>,
        <li className="nav-item" key={'newdoc'}><Link
          className="btn btn-success"
          to="/newdoc"
          role="button"
        >
          New Document</Link></li>,
        <li className="nav-item" key={'signout'}>
          <a className="nav-link float-right" href="/api/logout">Sign Out</a>
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
          <a className="nav-link float-right" href="/auth/google">Sign In</a>
        </li>]
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img className="navbar-brand" src="./logo.png" width="120" height="60" alt="logo" />
        </Link>
        <ul className="nav ">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}


export default Header;
