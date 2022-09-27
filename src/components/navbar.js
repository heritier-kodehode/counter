import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to={"/counter"}>Home</Link>
      </li>
      <li>
        <Link to={"/counter/about"}>About</Link>
      </li>
      <li>
        <Link to={"/counter/contact"}>Contact</Link>
      </li>
    </ul>
  );
}
