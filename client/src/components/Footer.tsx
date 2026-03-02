import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/support", label: "Support" },
];

const socials = [
  { to: "https://www.instagram.com/rpmnyc/", label: "Instagram" },
  { to: "https://www.facebook.com/RPMNYCMOTORSPORTS/", label: "Facebook" },
  { to: "https://www.youtube.com/@rpmnyc", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-white border-t border-white/[0.06]">
      {/* ── MAIN FOOTER BODY ── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand col */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="md:col-span-1 space-y-5"
        >
          <Link to="/">
            <span className="font-bold tracking-wide">
              <span className="text-4xl text-[#14007e] italic">RPM </span>
              <span className="text-3xl text-[#9d9d9b] font-rocksalt">nyc</span>
            </span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
            Full-service auto shop serving NYC drivers since day one.
          </p>
          {/* social icons row */}
          <div className="flex gap-4 pt-1">
            {socials.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-500 hover:text-[#00f0ff] transition-colors duration-300 text-xs uppercase tracking-widest font-mono"
              >
                {s.label === "Instagram" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {s.label === "Facebook" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {s.label === "YouTube" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Nav col */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="space-y-5"
        >
          <h3 className="text-[10px] uppercase tracking-[0.22em] text-[#00f0ff] font-mono">
            Navigate
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm group inline-flex items-center gap-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact col */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
          className="space-y-5"
        >
          <h3 className="text-[10px] uppercase tracking-[0.22em] text-[#00f0ff] font-mono">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 font-mono mb-1">
                Phone
              </p>
              <a
                href="tel:7187403277"
                className="hover:text-white transition-colors duration-300"
              >
                (718) 740-3277
              </a>
            </li>
            <li>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 font-mono mb-1">
                Address
              </p>
              <Link
                to="https://www.google.com/maps/place/RPM+NYC/@40.7165944,-73.7404582,775m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c263d246037009:0xe9941f80e2931fe3!8m2!3d40.7165944!4d-73.7378833!16s%2Fg%2F1td2vtv5?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 leading-relaxed"
              >
                217-85 98th Ave
                <br />
                Queens Village, NY 11429
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Hours col */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeUp}
          className="space-y-5"
        >
          <h3 className="text-[10px] uppercase tracking-[0.22em] text-[#00f0ff] font-mono">
            Hours
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { day: "Mon – Fri", hours: "8:00 AM – 6:00 PM" },
              { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
              { day: "Sunday", hours: "Closed" },
            ].map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span className="text-gray-500">{h.day}</span>
                <span
                  className={
                    h.hours === "Closed" ? "text-[#00f0ff]/60" : "text-gray-300"
                  }
                >
                  {h.hours}
                </span>
              </li>
            ))}
          </ul>

          <Link
            to="/support"
            className="inline-flex items-center gap-2 mt-2 bg-[#00f0ff] hover:bg-[#00c8d4] transition-colors duration-300 px-5 py-2.5 text-black text-[10px] font-bold uppercase tracking-widest group"
          >
            Book a Service
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/[0.06] px-8 md:px-16 py-5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-gray-600 font-mono uppercase tracking-widest">
          <span>
            © {new Date().getFullYear()} RPM NYC. All rights reserved.
          </span>
          <span>Queens Village, New York</span>
        </div>
      </div>
    </footer>
  );
}
