import React from 'react';

// Component dedicated to rendering the application header
const Header = () => (
  // Using Bootstrap classes for a dark, rounded, and shadowed navigation bar
  <nav className="navbar navbar-dark bg-dark mx-2 mb-5 p-3 flex-shrink-0">
    <div className="container-fluid">
      {/* Main Title and Logo */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>⚛️</span>
        <h1 className="h4 my-0 text-white">React Quiz Challenge</h1>
      </a>
      
      {/* Tagline/Description */}
      <span className="navbar-text text-white-50 d-none d-sm-block">
        Test your React knowledge, simply.
      </span>
    </div>
  </nav>
);
export default Header;