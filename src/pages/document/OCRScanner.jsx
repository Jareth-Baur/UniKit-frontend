import { useState } from "react";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import ErrorMessage from "../../components/common/ErrorMessage";
import FileDropzone from "../../components/common/FileDropzone";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ToolHeader from "../../components/tools/ToolHeader";

import { scanOCR } from "../../services/ocrApi";
import { validateImage } from "../../utils/fileValidation";

function OCRScanner() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [result, setResult] = useState(null);

  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] =
    useState(false);

  function handleFileSelect(selectedFile) {
    setError("");
    setResult(null);

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

    const url =
      URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setPreviewUrl(url);
  }

  async function handleScan() {
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setError("");
    setIsProcessing(true);

    try {
      const data = await scanOCR(file);

      setResult(data);

    } catch (err) {
      setError(
        err.message ||
        "OCR processing failed."
      );
    } finally {
      setIsProcessing(false);
    }
  }

  async function handleCopy() {
    if (!result?.text) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        result.text
      );
    } catch {
      setError(
        "Unable to copy text to clipboard."
      );
    }
  }

  function handleDownload() {
    if (!result?.text) {
      return;
    }

    const blob = new Blob(
      [result.text],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download = "ocr-result.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  }

  function handleReset() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError("");
  }

  return (
    <div className="page tool-page">

      <ToolHeader
        category="DOCUMENT TOOL"
        title="OCR Scanner"
        description="Extract text from images using optical character recognition."
      />

      <Card className="tool-card-container">

        {!file && (
          <FileDropzone
            accept="image/jpeg,image/png,image/webp"
            onFileSelect={handleFileSelect}
            title="Drop an image here"
            description="Upload a clear image containing text"
          />
        )}

        {error && (
          <ErrorMessage message={error} />
        )}

        {file && !result && (
          <div className="ocr-workspace">

            <div className="image-preview">

              <img
                src={previewUrl}
                alt="OCR source"
              />

            </div>

            {isProcessing ? (
              <LoadingSpinner
                label="Extracting text..."
              />
            ) : (
              <div className="tool-actions">

                <Button
                  onClick={handleScan}
                >
                  Scan Image
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

        {result && (
          <div className="ocr-result">

            <div className="result-header">

              <h2>
                Extracted Text
              </h2>

              <span>
                {result.count} text region
                {result.count !== 1 ? "s" : ""}
              </span>

            </div>

            <textarea
              className="ocr-textarea"
              value={result.text}
              readOnly
              rows={12}
            />

            <div className="tool-actions">

              <Button
                onClick={handleCopy}
              >
                Copy Text
              </Button>

              <Button
                variant="secondary"
                onClick={handleDownload}
              >
                Download TXT
              </Button>

              <Button
                variant="secondary"
                onClick={handleReset}
              >
                Scan Another
              </Button>

            </div>

          </div>
        )}

      </Card>

    </div>
  );
}

export default OCRScanner;