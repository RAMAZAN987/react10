import React from 'react';
function Header() {
  return (
    <div className="header">
      <div className="container">
      <a href="#" className="logo">logo</a>
        <nav className="header_nav">
          <a href="" className="header_link">Home</a>
          <a href="" className="header_link">About</a>
          <a href="" className="header_link">Contacts</a>
        </nav>
        <div className="burger-menu">
        <nav className="header_nav-mobile">
          <a href="" className="header_link">Home</a>
          <a href="" className="header_link">About</a>
          <a href="" className="header_link">Contacts</a>
        </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;