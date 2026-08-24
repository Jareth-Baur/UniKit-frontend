import { useEffect, useState } from "react";

import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import ErrorMessage from "../../components/common/ErrorMessage";
import FileDropzone from "../../components/common/FileDropzone";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ToolHeader from "../../components/tools/ToolHeader";

import { removeBackground } from "../../services/backgroundApi";
import { validateImage } from "../../utils/fileValidation";

function BackgroundRemover() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);

  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }
    };
  }, [previewUrl, resultUrl]);

  function handleFileSelect(selectedFile) {
    setError("");
    setResultUrl(null);

    if (!selectedFile) {
      return;
    }

    const validationError =
      validateImage(selectedFile);

    if (validationError) {
      setFile(null);
      setPreviewUrl(null);
      setError(validationError);
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const newPreviewUrl =
      URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreviewUrl(newPreviewUrl);
  }

  async function handleRemoveBackground() {
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setError("");
    setIsProcessing(true);

    try {
      const resultBlob =
        await removeBackground(file);

      if (resultUrl) {
        URL.revokeObjectURL(resultUrl);
      }

      const newResultUrl =
        URL.createObjectURL(resultBlob);

      setResultUrl(newResultUrl);

    } catch (err) {
      setError(
        err.message ||
        "Something went wrong while removing the background."
      );
    } finally {
      setIsProcessing(false);
    }
  }

  function handleDownload() {
    if (!resultUrl) {
      return;
    }

    const link = document.createElement("a");

    link.href = resultUrl;
    link.download = "background-removed.png";

    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function handleReset() {
    setFile(null);
    setError("");

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (resultUrl) {
      URL.revokeObjectURL(resultUrl);
    }

    setPreviewUrl(null);
    setResultUrl(null);
  }

  return (
    <div className="page tool-page">

      <ToolHeader
        category="IMAGE TOOL"
        title="Background Remover"
        description="Remove the background from an image automatically and download the result as a transparent PNG."
      />

      <Card className="tool-card-container">

        {!file && (
          <FileDropzone
            accept="image/jpeg,image/png,image/webp"
            onFileSelect={handleFileSelect}
            title="Drop your image here"
            description="JPG, PNG, or WebP • Maximum 10 MB"
          />
        )}

        {error && (
          <ErrorMessage message={error} />
        )}

        {file && !resultUrl && (
          <div className="image-processing-area">

            <div className="image-preview">

              <img
                src={previewUrl}
                alt="Selected image"
              />

            </div>

            <div className="file-info">

              <strong>
                {file.name}
              </strong>

              <span>
                {(file.size / 1024 / 1024).toFixed(2)}
                {" MB"}
              </span>

            </div>

            {isProcessing ? (
              <LoadingSpinner
                label="Removing background..."
              />
            ) : (
              <div className="tool-actions">

                <Button
                  onClick={handleRemoveBackground}
                >
                  Remove Background
                </Button>

                <Button
                  variant="secondary"
                  onClick={handleReset}
                >
                  Choose Another
                </Button>

              </div>
            )}

          </div>
        )}

        {resultUrl && (
          <div className="result-area">

            <div className="result-header">
              <h2>
                Background Removed
              </h2>

              <p>
                Your image is ready.
              </p>
            </div>

            <div className="result-preview">
              <img
                src={resultUrl}
                alt="Background removed result"
              />
            </div>

            <div className="tool-actions">

              <Button
                onClick={handleDownload}
              >
                Download PNG
              </Button>

              <Button
                variant="secondary"
                onClick={handleReset}
              >
                Process Another
              </Button>

            </div>

          </div>
        )}

      </Card>

    </div>
  );
}

export default BackgroundRemover;