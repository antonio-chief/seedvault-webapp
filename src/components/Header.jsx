import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="search">
        <input type="text" placeholder="Search for data & reports..." />
        <button><i className="fas fa-search"></i></button>
      </div>
      <div className="user-profile">
        <img src="/user.jpg" alt="User" />
        <span>John Doe</span>
        <div className="notifications">
          <i className="fas fa-bell"></i>
          <i className="fas fa-envelope"></i>
          <i className="fas fa-cog"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;

