import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HotelsPage from "./pages/HotelsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hotels" element={<HotelsPage />} />
      </Routes>
    </Router>
  );
}
