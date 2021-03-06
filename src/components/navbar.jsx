import React, { Component } from "react";

const NavBar = ({totalCounters}) => {
    return (
      <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
              {totalCounters}
            </span>
          </a>
      </nav>
    );
}
export default NavBar;

