import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HotelsPage from "./pages/HotelsPage";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:id" element={<DetailsPage />} />
          <Route path="*" element={<Navigate to="/hotels" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
