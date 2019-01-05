import React from "react";

const navStyle = {
    color: "white",
    padding: "20px"
}

function Nav(props) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <ul className="navbar-nav mx-auto">
          <li className="nav-item" style={navStyle}>{props.result}</li>
          <li className="nav-item" style={navStyle}>Your score: {props.currentScore}</li>
          <li className="nav-item" style={navStyle}>Top score: {props.topScore}</li>
      </ul>
    </nav>
  );
}

export default Nav;