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
          <div className="content">
            {this.props.children}
          </div>
        </div>
        </div>

    );
  }
})
