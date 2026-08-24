import API_URL from "./api";

export async function transcribeAudio(file) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${API_URL}/api/transcription/transcribe`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.detail || "Transcription failed."
    );
  }

  return response.json();
}