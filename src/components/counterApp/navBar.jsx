import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span>
          there is {props.counters.filter((c) => c.value > 0).length} counter
          great than 0
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
