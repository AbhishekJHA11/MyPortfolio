<nav className="navbar">
  <div className="logo">Abhishek Jha</div>

  <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
    <li>
      <Link to="/" onClick={() => setIsMenuOpen(false)}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" onClick={() => setIsMenuOpen(false)}>
        About
      </Link>
    </li>
    <li>
      <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
        Projects
      </Link>
    </li>
    <li>
      <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
        Contact
      </Link>
    </li>
  </ul>

  <div className="nav-controls">
    <button onClick={toggleTheme} className="theme-toggle">
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>

    <div
      className={`hamburger ${isMenuOpen ? "open" : ""}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>;
