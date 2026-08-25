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
        <div className="footer-container">
          <div className="footer-brand">
            <strong>UniKit</strong>

            <p>Free tools for everyday tasks.</p>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/Jareth-Baur"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jareth-baur/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="footer-meta">
            <span>Built by Jareth Baur</span>

            <span>© {new Date().getFullYear()} UniKit</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
