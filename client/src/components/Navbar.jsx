import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    // ✅ Load saved theme
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    // ✅ Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [scrolled, setScrolled] = useState(false);

  // 🌙 Apply Theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🧭 Navbar Scroll Shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl transition-all duration-300
        
        ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 border-b border-gray-300 dark:border-gray-700 shadow-sm"
            : "bg-transparent border-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="font-bold text-2xl text-black dark:text-white tracking-wide">
          Portfolio
        </h1>

        {/* MENU LINKS */}
        <div className="flex items-center gap-6 text-black dark:text-gray-200 font-medium">

          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>

          <Link to="/skills" className="hover:text-blue-600 dark:hover:text-blue-400">
            Skills
          </Link>

          <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">
            Projects
          </Link>

          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>

          {/* THEME BUTTON */}
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="
              w-10 h-10 flex items-center justify-center rounded-full
              bg-gray-200 dark:bg-gray-800
              text-black dark:text-white
              hover:scale-110 transition
            "
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
