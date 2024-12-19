import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HotelsPage from "./pages/HotelsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="*" element={<Navigate to="/hotels" replace />} />
      </Routes>
    </Router>
  );
}
