import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Items Selected
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totalItems}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
