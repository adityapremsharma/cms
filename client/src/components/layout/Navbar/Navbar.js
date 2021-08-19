import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ pages }) => {
  return (
    <div className="navbar">
      <div className="right">
        <Link to="/view">
          <p>View</p>
        </Link>
        <Link to="/cms">
          <p>CMS</p>
        </Link>
        {pages.map((page) => (
          <Link key={page.id} to={`/${page.name}`}>
            <p>{page.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
