import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/layout/Header";
import HotelsPage from "./pages/HotelsPage";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotels/:id" element={<DetailsPage />} />
        <Route path="*" element={<Navigate to="/hotels" replace />} />
      </Routes>
    </Router>
  );
}
