import { useState } from "react";
import { Link } from "react-router-dom";

import { navigation } from "../../config/navigation";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setMobileOpen(false)}
          >
            UniKit
          </Link>

          <nav className="navbar-links">
            <Link to="/">Home</Link>

            {navigation.map((category) => (
              <Link key={category.id} to={category.path}>
                {category.label}
              </Link>
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
