//One.js
import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <div className="nav">
          <ul className="nav-list">
            <li><Link to="/one/AAA" className="nav-link">AAA</Link></li>
            <li><Link to="/one/BBB" className="nav-link">BBB</Link></li>
            <li><Link to="/one/CCC" className="nav-link">CCC</Link></li>
          </ul>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
})
