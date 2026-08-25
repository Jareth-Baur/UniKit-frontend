import { NavLink } from "react-router-dom";

import { X } from "lucide-react";

function MobileMenu({ navigation = [], open, onClose }) {
  if (!open) {
    return null;
  }

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-header">
        <span>Menu</span>

        <button type="button" onClick={onClose} aria-label="Close menu">
          <X size={20} />
        </button>
      </div>

      <nav>
        <NavLink to="/" onClick={onClose}>
          Home
        </NavLink>

        {navigation.map((category) => (
          <div key={category.id} className="mobile-category">
            <span>{category.label}</span>

            {category.items.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={onClose}>
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default MobileMenu;
