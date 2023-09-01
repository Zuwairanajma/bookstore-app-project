import { Link } from 'react-router-dom';
import React from 'react';
import '../MenuLinks.css';
import { FaUser } from 'react-icons/fa';

function MenuLink() {
  return (
    <div className="nav-side">
      <nav className="nav-link">
        <Link className="Nav-Header" to="/">Bookstore CMS</Link>
        <Link className="NavL" style={{ color: '#121212' }} to="/BookPage">BOOKS</Link>
        <Link className="NavL" style={{ color: 'hsla(0,0%,8%,.6)' }} to="/categories">CATEGORIES</Link>
      </nav>
      <div className="nav-container">
        <FaUser size={28} color="#0290ff" />
      </div>
    </div>
  );
}

export default MenuLink;
