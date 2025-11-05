import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Competition from "./pages/Competition/Competition";
import NewsGallery from "./pages/NewsGallery/NewsGallery";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const cleanUrl = () => {
      const url = new URL(window.location.href);
      url.searchParams.delete('fbclid');  // Removes fbclid from the URL
      if (window.location.href !== url.toString()) {
        window.history.replaceState({}, '', url.toString()); // Updates the URL in the browser
      }
    };
    cleanUrl();
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/road-to-essen" element={<Competition />} />
          <Route path="/news-gallery" element={<NewsGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
