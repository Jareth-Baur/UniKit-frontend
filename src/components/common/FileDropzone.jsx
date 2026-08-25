import { useRef, useState } from "react";
import { FileUp } from "lucide-react";

function FileDropzone({
  onFileSelect,
  accept = "*",
  multiple = false,
  disabled = false,
  title = "Drop your file here",
  description = "or click to browse",
  error,
}) {
  const inputRef = useRef(null);

  const [isDragging, setIsDragging] =
    useState(false);

  function handleFiles(files) {
    if (!files || files.length === 0) {
      return;
    }

    if (multiple) {
      onFileSelect(Array.from(files));
    } else {
      onFileSelect(files[0]);
    }
  }

  function handleInputChange(event) {
    handleFiles(event.target.files);

    // Allows selecting the same file again.
    event.target.value = "";
  }

  function handleDragOver(event) {
    event.preventDefault();

    if (!disabled) {
      setIsDragging(true);
    }
  }

  function handleDragLeave(event) {
    event.preventDefault();

    setIsDragging(false);
  }

  function handleDrop(event) {
    event.preventDefault();

    setIsDragging(false);

    if (disabled) {
      return;
    }

    handleFiles(event.dataTransfer.files);
  }

  function openFilePicker() {
    if (!disabled) {
      inputRef.current?.click();
    }
  }

  function handleKeyDown(event) {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      openFilePicker();
    }
  }

  return (
    <div className="file-upload-wrapper">
      <div
        className={[
          "file-dropzone",
          isDragging ? "file-dropzone-active" : "",
          disabled ? "file-dropzone-disabled" : "",
          error ? "file-dropzone-error" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={openFilePicker}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        <div className="file-dropzone-icon">
          <FileUp size={26} strokeWidth={2} />
        </div>

        <div className="file-dropzone-content">
          <h3>{title}</h3>

          <p>
            {description}
          </p>
        </div>

        <span className="file-dropzone-browse">
          Browse files
        </span>

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          hidden
        />
      </div>

      {error && (
        <p className="file-upload-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default FileDropzone;