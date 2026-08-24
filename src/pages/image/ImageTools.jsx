import { Link } from "react-router-dom";

import ToolGrid from "../../components/tools/ToolGrid";
import { tools } from "../../config/tools";

function ImageTools() {
  const imageTools = tools.filter(
    (tool) => tool.category === "image"
  );

  return (
    <div className="page category-page">

      <section className="category-header">

        <span className="section-label">
          IMAGE
        </span>

        <h1>
          Image Tools
        </h1>

        <p>
          Free tools for editing, converting, and
          processing images.
        </p>

      </section>

      <ToolGrid tools={imageTools} />

    </div>
  );
}

export default ImageTools;