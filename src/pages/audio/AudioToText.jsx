import ToolGrid from "../../components/tools/ToolGrid";
import { tools } from "../../config/tools";

function AudioTools() {
  const audioTools = tools.filter(
    (tool) => tool.category === "audio"
  );

  return (
    <div className="page category-page">

      <section className="category-header">

        <span className="section-label">
          AUDIO
        </span>

        <h1>
          Audio Tools
        </h1>

        <p>
          Convert speech, recordings, and audio
          files into useful text.
        </p>

      </section>

      <ToolGrid tools={audioTools} />

    </div>
  );
}

export default AudioTools;