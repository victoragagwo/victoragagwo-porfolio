import React, { useState } from 'react';
import "../styling/navbar.css";

const Navbar = ({ dark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`flex items-center justify-between px-6 py-3 shadow-md transition-colors duration-800 ${dark ? 'bg-black' : 'bg-white'}`}>
      {/* Hamburger for tablet and below */}
      <button
        className="hamburger md:hidden"
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`hamburger-bar ${dark ? 'bg-white' : 'bg-black'}`}></span>
        <span className={`hamburger-bar ${dark ? 'bg-white' : 'bg-black'}`}></span>
        <span className={`hamburger-bar ${dark ? 'bg-white' : 'bg-black'}`}></span>
      </button>

      <div className={`text-2xl font-bold ${dark ? 'text-white' : 'text-black'} nav-brand`}>
        <button
          onClick={() => window.location.hash = "#home"}
          className="focus:outline-none"
          style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
        >
          Victor Agagwo
        </button>
      </div>

      {/* Desktop links */}
      <div className="flex space-x-24 text-lg nav-links">
        <a
          href="https://victoragagwo.github.io/personal-website/"
          className={`${dark ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
        >
          Personal Website
        </a>
        <a
          href="#projects"
          className={`${dark ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={`${dark ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
        >
          Skills
        </a>
        <a
          href='#contact'
          className={`${dark ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
        >
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-8 nav-toggle">
        <button
          onClick={toggleTheme}
          className={`navbar-toggle-theme transition-colors text-2xl p-2 rounded-full focus:outline-none ${
            dark ? 'text-white hover:text-[blue]' : 'text-black hover:text-[blue]'
          }`}
          aria-label="Toggle theme"
        >
          {dark ? (
            // Sun icon for light mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42"/>
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                fill="none"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className={`mobile-menu md:hidden ${dark ? 'bg-black' : 'bg-white'}`}>
          <a
            href="https://victoragagwo.github.io/personal-website/"
            className={`${dark ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Personal website
          </a>
          <a
            href="#projects"
            className={`${dark ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`${dark ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`${dark ? 'text-white' : 'text-black'} hover:text-blue-500 transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;