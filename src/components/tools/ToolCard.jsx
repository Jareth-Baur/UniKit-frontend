import { Link } from "react-router-dom";

function ToolCard({
  tool,
}) {
  const {
    name,
    description,
    path,
    icon,
    available = true,
  } = tool;

  return (
    <div
      className={[
        "tool-card",
        !available ? "tool-card-disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >

      <div className="tool-card-icon">
        {icon}
      </div>

      <div className="tool-card-content">

        <h3>{name}</h3>

        <p>{description}</p>

      </div>

      {available ? (
        <Link
          to={path}
          className="tool-card-link"
        >
          Open Tool
        </Link>
      ) : (
        <span className="tool-card-coming-soon">
          Coming Soon
        </span>
      )}

    </div>
  );
}

export default ToolCard;