import { NavLink } from "react-router-dom";

import { navigation } from "../../config/navigation";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span>Tools</span>
      </div>

      <nav className="sidebar-navigation">
        {navigation.map((category) => (
          <div key={category.id} className="sidebar-category">
            <NavLink to={category.path} className="sidebar-category-link">
              {category.label}
            </NavLink>

            <div className="sidebar-items">
              {category.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="sidebar-item"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
