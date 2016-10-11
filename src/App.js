import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
      <div className="header">
          <Link to="/one" className="menu">One</Link>
          <Link to="/two" className="menu">Two</Link>
      </div>
        <div className="container">
          <div className="nav">
            <ul className="nav-list">
              <li><a href="" className="nav-link">One</a></li>
              <li><a href="" className="nav-link">Two</a></li>
              <li><a href="" className="nav-link">Three</a></li>
            </ul>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>

    );
  }
})
