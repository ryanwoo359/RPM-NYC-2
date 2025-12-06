import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const NavLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/support", label: "Support" },
  ];

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
            ? "bg-black/70 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <span className="text-white text-2xl md:text-3xl font-bold tracking-wide z-[2000]">
          <span className="text-[#00f0ff]">RPM </span>
          <span className="text-[#9d9c9e]">NYC</span>
        </span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {NavLinks.map((link) => (
            <motion.li
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#00f0ff] font-semibold"
                      : "text-gray-300 hover:text-white hover:font-semibold"
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
          className="md:hidden text-white z-[2000] relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* FULLSCREEN MOBILE MENU */}
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" },
          closed: { opacity: 0, pointerEvents: "none" },
        }}
        transition={{ duration: 0.3 }}
        className="
          fixed top-0 left-0 w-full h-screen
          bg-black/90 backdrop-blur-lg
          flex flex-col items-center justify-center
          gap-10
          md:hidden
          z-[999]
        "
      >
        {NavLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
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
    </motion.nav>
  );
}
