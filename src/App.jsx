import { Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import ImageTools from "./pages/image/ImageTools";
import BackgroundRemover from "./pages/image/BackgroundRemover";

import DocumentTools from "./pages/document/DocumentTools";
import OCRScanner from "./pages/document/OCRScanner";

import AudioTools from "./pages/audio/AudioTools";
import AudioToText from "./pages/audio/AudioToText";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Image */}
        <Route
          path="/image"
          element={<ImageTools />}
        />

        <Route
          path="/image/background-remover"
          element={<BackgroundRemover />}
        />

        {/* Document */}
        <Route
          path="/document"
          element={<DocumentTools />}
        />

        <Route
          path="/document/ocr"
          element={<OCRScanner />}
        />

        {/* Audio */}
        <Route
          path="/audio"
          element={<AudioTools />}
        />

        <Route
          path="/audio/transcription"
          element={<AudioToText />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Route>
    </Routes>
  );
}

export default App;