import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-white/30 backdrop-blur-md" :  "bg-slate-900"
      } text-white p-4 fixed w-full z-10 top-0 left-0 border-b border-slate-800 shadow-lg transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center text-2xl font-bold space-x-2">
          <Link to="/" className="flex items-center hover:text-gray-400 transition-colors">
            <ImSearch className="mr-2" />
            <span className="text-xl sm:text-2xl">JobFinder</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link to="/lokal-jobs" className="hover:text-gray-400 transition-colors">
            Lokal Jobs
          </Link>
          <Link to="/inter-jobs" className="hover:text-gray-400 transition-colors">
            International Jobs
          </Link>
          <Link to="/About" className="hover:text-gray-400 transition-colors">
            About
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-3xl">
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden p-6 space-y-6 transition-all ease-in-out duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <Link
          to="/"
          className="block text-center hover:text-gray-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/lokal-jobs"
          className="block text-center hover:text-gray-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Lokal Jobs
        </Link>
        <Link
          to="/inter-jobs"
          className="block text-center hover:text-gray-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          International Jobs
        </Link>
        <Link
          to="/About"
          className="block text-center hover:text-gray-400 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
