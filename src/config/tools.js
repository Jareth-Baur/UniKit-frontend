export const tools = [
  {
    id: "background-remover",
    name: "Background Remover",
    description: "Remove image backgrounds automatically.",
    category: "image",
    path: "/image/background-remover",
    icon: "image",
    available: true,
  },

  {
    id: "ocr-scanner",
    name: "OCR Scanner",
    description: "Extract text from images and documents.",
    category: "document",
    path: "/document/ocr",
    icon: "scan-text",
    available: true,
  },

  {
    id: "audio-to-text",
    name: "Audio to Text",
    description: "Convert speech and recordings into text.",
    category: "audio",
    path: "/audio/transcription",
    icon: "audio-lines",
    available: true,
  },

  {
    id: "pdf-tools",
    name: "PDF Tools",
    description: "Merge, split, convert, and manage PDF files.",
    category: "document",
    path: "/pdf",
    icon: "file-text",
    available: false,
  },
];