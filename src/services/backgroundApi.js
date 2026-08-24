import API_URL from "./api";

export async function removeBackground(file) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${API_URL}/api/background/remove`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.detail || "Background removal failed."
    );
  }

  return response.blob();
}