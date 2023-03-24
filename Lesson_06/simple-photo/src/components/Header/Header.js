import React from "react";
import './styles.css';

const Header = () => {
  return (
    <div className="header d-flex justify-content-around">
      <nav className="navbar">
        <a className="nav-link" href="#home" id="active">
          home
        </a>
        <a className="nav-link"  href="#photoapp">photoapp</a>
        <a className="nav-link"  href="#desig">design</a>
        <a className="nav-link"  href="#download">download</a>
      </nav>
    </div>
  );
};

export default Header;
