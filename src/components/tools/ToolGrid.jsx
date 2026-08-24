import ToolCard from "./ToolCard";

function ToolGrid({
  tools = [],
}) {
  if (tools.length === 0) {
    return (
      <p>No tools available.</p>
    );
  }

  return (
    <div className="tool-grid">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
        />
      ))}
    </div>
  );
}

export default ToolGrid;