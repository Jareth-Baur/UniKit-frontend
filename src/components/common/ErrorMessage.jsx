function ErrorMessage({
  message,
  className = "",
}) {
  if (!message) {
    return null;
  }

  return (
    <div
      className={`error-message ${className}`}
      role="alert"
    >
      <span className="error-message-icon">
        !
      </span>

      <span>{message}</span>
    </div>
  );
}

export default ErrorMessage;