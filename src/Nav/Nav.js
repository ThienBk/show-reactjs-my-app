import React from "react";
import './Nav.scss'
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">Todos</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/user" activeClassName="active">User</NavLink>
        </div>

        <div>
          <h2>Top Navigation Example</h2>
          <p>Some content..</p>
        </div>
      </>
    );
  }
}
export default Nav;
