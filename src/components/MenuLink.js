import { Link } from 'react-router-dom';
import React from 'react';
import '../MenuLinks.css';

function MenuLink() {
  return (
    <div className="nav-side">
      <nav className="nav-link">
        <Link className="Nav-Header" to="/">Bookstore CMS</Link>
        <Link className="NavL" to="/BookPage">Book</Link>
        <Link className="NavL" to="/categories">Categories</Link>
      </nav>
    </div>
  // </div>
  );
}

export default MenuLink;
