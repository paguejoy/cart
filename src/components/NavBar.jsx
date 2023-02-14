import React, { Component } from "react";

const NavBar = ({totalCount, product}) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span>
            {totalCount > 0 && (
              <span className="badge bg-secondary ms-2">
                {totalCount}
              </span>
            )}
          </span>
        </span>
        <span className="d-block text-left badge bg-success ms-2"><h5>Cart: {product.length} items</h5></span>
      </div>
    </nav>
  );
};

export default NavBar;
