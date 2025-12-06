import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const NavLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/support", label: "Support" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-gray-400">
      <div className="max-w-[1600px] mx-auto px-6 py-10 flex justify-around items-center ">
        {/* Logo / Title */}
        <span className="text-[#00f0ff] text-xl font-bold tracking-wide">
          RPM <span className="text-[#9d9c9e]">NYC</span>
        </span>

        {/* Navigation Links (stacked) */}
        <ul className="flex flex-col items-center gap-4">
          {NavLinks.map((link) => (
            <motion.li
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                role="menuitem"
                className="transition-colors duration-300 hover:text-white hover:font-semibold"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} RPM NYC. All rights reserved.
      </div>
    </footer>
  );
}
