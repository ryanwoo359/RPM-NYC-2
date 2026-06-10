import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { to: "/", label: "HOME", end: true },
  { to: "/services", label: "SERVICES" },
  { to: "/about", label: "ABOUT" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/support", label: "SUPPORT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 
        ${
          menuOpen
            ? "bg-black/90 backdrop-blur-lg shadow-md"
            : scrolled
            ? "bg-black/40 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[95vw] mx-auto flex items-center justify-between px-4 py-3 md:px-24">
        {/* Logo */}
        <Link to="/">
          <span className="relative font-bold tracking-wide z-[2000]">
            <span className="text-3xl text-[#14007e] italic">RPM </span>
            <span className="text-xl text-[#9d9d9b] font-rocksalt">nyc</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <motion.li
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `inline-block transition-colors duration-300 ease-in-out ${
                    isActive ? "text-[#00f0ff]" : "text-gray-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[2000] relative"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-7 h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white my-1.5 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center gap-10 md:hidden z-[999]"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-3xl transition-colors duration-300 ${
                    isActive
                      ? "text-[#00f0ff] font-semibold"
                      : "text-gray-300 hover:text-white hover:font-semibold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
