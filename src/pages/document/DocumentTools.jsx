import ToolGrid from "../../components/tools/ToolGrid";
import { tools } from "../../config/tools";

function DocumentTools() {
  const documentTools = tools.filter(
    (tool) => tool.category === "document"
  );

  return (
    <div className="page category-page">

      <section className="category-header">

        <span className="section-label">
          DOCUMENT
        </span>

        <h1>
          Document Tools
        </h1>

        <p>
          Extract, process, and work with your
          documents without unnecessary complexity.
        </p>

      </section>

      <ToolGrid tools={documentTools} />

    </div>
  );
}

export default DocumentTools;