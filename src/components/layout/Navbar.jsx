import { Link } from "react-router-dom";

import { navigation } from "../../config/navigation";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        UniKit
      </Link>

      <nav className="navbar-links">
        <Link to="/">Home</Link>

        {navigation.map((category) => (
          <Link
            key={category.id}
            to={category.path}
          >
            {category.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;