import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
        <nav style={{'backgroundColor':'#2979FF !important'}}>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Book My Salon</a>
    </div>
  </nav>

    );
  }
}
export default Navbar;