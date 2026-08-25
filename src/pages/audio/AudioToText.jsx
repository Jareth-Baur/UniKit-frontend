import { useState } from "react";

import {
  Check,
  Clipboard,
  Download,
  RotateCcw,
} from "lucide-react";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import ErrorMessage from "../../components/common/ErrorMessage";
import FileDropzone from "../../components/common/FileDropzone";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ToolHeader from "../../components/tools/ToolHeader";

import { transcribeAudio } from "../../services/transcriptionApi";
import { validateAudio } from "../../utils/fileValidation";

function AudioToText() {
  const [file, setFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

  const [result, setResult] = useState(null);

  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  function handleFileSelect(selectedFile) {
    setError("");
    setResult(null);

    if (!selectedFile) {
      return;
    }

    const validationError = validateAudio(selectedFile);

    if (validationError) {
      setFile(null);
      setAudioUrl(null);
      setError(validationError);
      return;
    }

    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

    const url = URL.createObjectURL(selectedFile);

    setFile(selectedFile);
    setAudioUrl(url);
  }

  async function handleTranscribe() {
    if (!file) {
      setError("Please select an audio file first.");
      return;
    }

    setError("");
    setIsProcessing(true);

    try {
      const data = await transcribeAudio(file);

      setResult(data);
    } catch (err) {
      setError(err.message || "Audio transcription failed.");
    } finally {
      setIsProcessing(false);
    }
  }

  async function handleCopy() {
    if (!result?.text) {
      return;
    }

    try {
      await navigator.clipboard.writeText(result.text);
    } catch {
      setError("Unable to copy transcript.");
    }
  }

  function handleDownload() {
    if (!result?.text) {
      return;
    }

    const blob = new Blob([result.text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "transcript.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  }

  function handleReset() {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }

    setFile(null);
    setAudioUrl(null);
    setResult(null);
    setError("");
  }

  return (
    <div className="page tool-page">
      <ToolHeader
        category="AUDIO TOOL"
        title="Audio to Text"
        description="Convert speech and recordings into text using AI-powered transcription."
      />

      <Card className="tool-card-container">
        {!file && (
          <FileDropzone
            accept="audio/*,video/mp4,video/webm"
            onFileSelect={handleFileSelect}
            title="Drop your audio here"
            description="MP3, WAV, M4A, WebM, or MP4 • Maximum 100 MB"
          />
        )}

        {error && <ErrorMessage message={error} />}

        {file && !result && (
          <div className="audio-workspace">
            <div className="file-info">
              <strong>{file.name}</strong>

              <span>
                {(file.size / 1024 / 1024).toFixed(2)}
                {" MB"}
              </span>
            </div>

            <audio className="audio-player" src={audioUrl} controls />

            {isProcessing ? (
              <LoadingSpinner label="Transcribing audio..." />
            ) : (
              <div className="tool-actions">
                <Button onClick={handleTranscribe}>Transcribe Audio</Button>

                <Button variant="secondary" onClick={handleReset}>
                  Choose Another
                </Button>
              </div>
            )}
          </div>
        )}

        {result && (
          <div className="transcription-result-card">
            <div className="transcription-result-header">
              <div className="transcription-result-title">
                <div className="transcription-result-icon">
                  <Check size={22} strokeWidth={2.5} />
                </div>

                <div>
                  <h2>Transcription Complete</h2>

                  <p>Audio successfully converted to text.</p>
                </div>
              </div>

              <div className="transcription-language-badge">
                Language: <strong>{result.language}</strong>
              </div>
            </div>

            <div className="transcription-text-section">
              <div className="transcription-text-header">
                <h3>Transcript</h3>

                <span>{result.text?.length ?? 0} characters</span>
              </div>

              <textarea
                className="transcription-textarea"
                value={result.text || ""}
                readOnly
                spellCheck={false}
              />
            </div>

            <div className="transcription-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCopy}
              >
                <Clipboard size={16} />
                Copy Transcript
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleDownload}
              >
                <Download size={16} />
                Download TXT
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                <RotateCcw size={16} />
                Transcribe Another
              </button>
            </div>

            {result.segments?.length > 0 && (
              <div className="transcription-segments">
                <div className="transcription-segments-header">
                  <div>
                    <h3>Timestamped Transcript</h3>

                    <p>Follow the transcript along with the audio timeline.</p>
                  </div>

                  <span>{result.segments.length} segments</span>
                </div>

                <div className="transcription-segment-list">
                  {result.segments.map((segment, index) => (
                    <div
                      className="transcription-segment"
                      key={`${segment.start}-${index}`}
                    >
                      <span className="transcription-timestamp">
                        {formatTime(segment.start)}
                      </span>

                      <p>{segment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}

function formatTime(seconds) {
  const totalSeconds = Math.floor(seconds);

  const minutes = Math.floor(totalSeconds / 60);

  const remainingSeconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds,
  ).padStart(2, "0")}`;
}

export default AudioToText;
