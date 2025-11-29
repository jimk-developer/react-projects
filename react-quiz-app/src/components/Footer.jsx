import React from 'react';

// Component dedicated to rendering the application footer
const Footer = () => (
  <footer className="footer mt-auto py-3 mx-2 bg-dark flex-shrink-0">
    <div className="container d-flex justify-content-between align-items-center">
      <span className="text-white small">
        &copy; {new Date().getFullYear()} React Quiz Challenge
      </span>
      <span className="text-white small">
        Developed by: Jim Kaufmann
      </span>
    </div>
  </footer>
);

export default Footer;