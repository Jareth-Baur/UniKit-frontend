function EmptyState({
  title = "Nothing here yet",
  description,
  icon,
}) {
  return (
    <div className="empty-state">
      {icon && (
        <div className="empty-state-icon">
          {icon}
        </div>
      )}

      <h3>{title}</h3>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

export default EmptyState;