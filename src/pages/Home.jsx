import { Link } from "react-router-dom";

import ToolGrid from "../components/tools/ToolGrid";
import { tools } from "../config/tools";

function Home() {
  const availableTools = tools.filter(
    (tool) => tool.available
  );

  const comingSoonTools = tools.filter(
    (tool) => !tool.available
  );

  return (
    <div className="page home-page">

      <section className="hero-section">

        <span className="hero-badge">
          Free utilities 
        </span>

        <h1>
          Useful tools.
          <br />
          <span>Absolutely free.</span>
        </h1>

        <p>
          UniKit provides simple tools for everyday tasks, allowing you
          to work with images, documents, audio, and
          more without expensive subscriptions.
        </p>

        <div className="hero-actions">
          <Link
            to="/image/background-remover"
            className="btn btn-primary"
          >
            Try Background Remover
          </Link>
        </div>

      </section>

      <section className="tools-section">

        <div className="section-header">
          <div>
            <span className="section-label">
              AVAILABLE NOW
            </span>

            <h2>
              Useful Tools
            </h2>
          </div>

          <p>
            Simple tools designed for everyday
            work.
          </p>
        </div>

        <ToolGrid tools={availableTools} />

      </section>

      {comingSoonTools.length > 0 && (
        <section className="tools-section">

          <div className="section-header">
            <div>
              <span className="section-label">
                COMING SOON
              </span>

              <h2>
                More Tools
              </h2>
            </div>
          </div>

          <ToolGrid tools={comingSoonTools} />

        </section>
      )}

    </div>
  );
}

export default Home;