//Two.js
import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <div className="nav">
          <ul className="nav-list">
            <li><Link to="/two/DDD" className="nav-link">DDD</Link></li>
            <li><Link to="/two/EEE" className="nav-link">EEE</Link></li>
            <li><Link to="/two/FFF" className="nav-link">FFF</Link></li>
          </ul>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
})
