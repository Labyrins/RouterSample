import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>react practice</h1>
        <ul >
          <li><Link to="/one">One</Link></li>
          <li><Link to="/two">Two</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
})