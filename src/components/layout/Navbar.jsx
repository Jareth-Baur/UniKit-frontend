import { useState } from "react";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { navigation } from "../../config/navigation";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <NavLink
            to="/"
            className="navbar-logo"
            onClick={() => setMobileOpen(false)}
          >
            <img src="/unikit-logo.png" alt="" className="navbar-logo-icon" />

            <span>UniKit</span>
          </NavLink>

          <nav className="navbar-links">
            <NavLink to="/" end>
              Home
            </NavLink>

            {navigation.map((category) => (
              <NavLink key={category.id} to={category.path}>
                {category.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      <MobileMenu
        navigation={navigation}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}

export default Navbar;
