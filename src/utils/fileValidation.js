export const IMAGE_LIMIT = 10 * 1024 * 1024;
export const AUDIO_LIMIT = 100 * 1024 * 1024;

export const IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export function validateImage(file) {
  if (!file) {
    return "Please select an image.";
  }

  if (!IMAGE_TYPES.includes(file.type)) {
    return "Only JPG, PNG, and WebP images are supported.";
  }

  if (file.size > IMAGE_LIMIT) {
    return "Image must be smaller than 10 MB.";
  }

  return null;
}

export function validateAudio(file) {
  if (!file) {
    return "Please select an audio file.";
  }

  if (file.size > AUDIO_LIMIT) {
    return "Audio/video must be smaller than 100 MB.";
  }

  return null;
}