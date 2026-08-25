import { LoaderCircle } from "lucide-react";

function LoadingSpinner({
  label = "Processing...",
}) {
  return (
    <div
      className="loading-spinner"
      role="status"
      aria-live="polite"
    >
      <LoaderCircle
        className="loading-spinner-icon"
        size={32}
      />

      <span>{label}</span>
    </div>
  );
}

export default LoadingSpinner;