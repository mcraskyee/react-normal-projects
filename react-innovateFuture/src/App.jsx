import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import PastEventPage from "./pages/PastEventPage";
import ContactUsPage from "./pages/ContactUsPage";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/past-events" element={<PastEventPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
