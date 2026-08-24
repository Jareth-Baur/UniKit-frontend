function Button({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  onClick,
  className = "",
}) {
  const classes = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    loading ? "btn-loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "Processing..." : children}
    </button>
  );
}

export default Button;