import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/layout/Header";
import HotelsPage from "./pages/HotelsPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="*" element={<Navigate to="/hotels" replace />} />
      </Routes>
    </Router>
  );
}
