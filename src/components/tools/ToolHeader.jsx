function ToolHeader({
  icon,
  title,
  description,
  category,
}) {
  return (
    <div className="tool-header">

      {category && (
        <span className="tool-category">
          {category}
        </span>
      )}

      {icon && (
        <div className="tool-header-icon">
          {icon}
        </div>
      )}

      <h1>{title}</h1>

      {description && (
        <p>{description}</p>
      )}

    </div>
  );
}

export default ToolHeader;