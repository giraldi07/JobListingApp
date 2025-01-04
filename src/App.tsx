import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"; // Import necessary hooks
import Navbar from "./components/Navbar";
import LokalJobs from "./pages/lokal-jobs";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer"; // Import Footer component
import { FaArrowUp } from "react-icons/fa"; // Import the scroll-up icon
import InterJobs from "./pages/inter-jobs";
import About from "./pages/About";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to show or hide the scroll-up button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lokal-jobs" element={<LokalJobs />} />
        <Route path="/inter-jobs" element={<InterJobs />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer /> {/* Add Footer here */}

      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </Router>
  );
};

export default App;
