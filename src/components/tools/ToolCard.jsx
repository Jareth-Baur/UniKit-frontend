import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import { toolIcons } from "../../config/toolIcons";

function ToolCard({ tool }) {
  const Icon = toolIcons[tool.icon] || FileText;

  return (
    <article className="tool-card">
      <div className="tool-card-icon">
        <Icon size={24} strokeWidth={2} aria-hidden="true" />
      </div>

      <div className="tool-card-content">
        <span className="tool-card-category">
          {tool.category.toUpperCase()}
        </span>

        <h3>{tool.name}</h3>

        <p>{tool.description}</p>
      </div>

      <div className="tool-card-footer">
        {tool.available ? (
          <Link to={tool.path} className="tool-card-link">
            Open Tool
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        ) : (
          <span className="tool-card-coming-soon">Coming Soon</span>
        )}
      </div>
    </article>
  );
}

export default ToolCard;
