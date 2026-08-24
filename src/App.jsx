import { Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import BackgroundRemover from "./pages/image/BackgroundRemover";
import OCRScanner from "./pages/document/OCRScanner";
import AudioToText from "./pages/audio/AudioToText";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/image/background-remover"
          element={<BackgroundRemover />}
        />

        <Route
          path="/document/ocr"
          element={<OCRScanner />}
        />

        <Route
          path="/audio/transcription"
          element={<AudioToText />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;