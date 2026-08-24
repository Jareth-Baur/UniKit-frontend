import API_URL from "./api";

export async function scanOCR(file) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${API_URL}/api/ocr/scan`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.detail || "OCR processing failed."
    );
  }

  return response.json();
}