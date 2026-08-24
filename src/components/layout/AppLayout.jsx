import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>
          UniKit — Free tools for everyday tasks.
        </p>
      </footer>

    </div>
  );
}

export default AppLayout;