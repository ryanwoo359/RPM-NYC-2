import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import picture from "../assets/gallery/picture.webp";
import unclecar from "../assets/gallery/unclecar.webp";
import blackcar from "../assets/gallery/blackcar.webp";
import suspension from "../assets/gallery/suspension.webp";
import fabrication from "../assets/gallery/fabrication.webp";
import picture2 from "../assets/gallery/picture2.webp";
import whitegtr from "../assets/gallery/whitegtr.webp";
import purpleCar from "../assets/gallery/purple_car.webp";
import work from "../assets/gallery/work.webp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

type GalleryItem = {
  src: string;
  alt: string;
  tag: string;
  span?: "wide" | "tall" | "large";
};

const items: GalleryItem[] = [
  { src: picture, alt: "Featured build", tag: "Full Build", span: "wide" },
  { src: unclecar, alt: "Uncle's car", tag: "Custom" },
  { src: blackcar, alt: "Black Car", tag: "Aesthetic", span: "tall" },
  { src: suspension, alt: "Suspension work", tag: "Suspension" },
  {
    src: fabrication,
    alt: "Fabrication work",
    tag: "Fabrication",
    span: "large",
  },
  { src: picture2, alt: "Project car", tag: "Performance" },
  { src: whitegtr, alt: "White GTR", tag: "Aesthetic", span: "tall" },
  { src: purpleCar, alt: "Purple car", tag: "Aesthetic" },
  { src: work, alt: "Shop work", tag: "Aesthetic" },
];

const spanClass: Record<string, string> = {
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  large: "md:col-span-2 md:row-span-2",
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      <div className="relative flex flex-col items-center justify-center pt-48 pb-24 px-6 overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f0ff]/10 blur-[120px] rounded-full" />

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.25em" }}
          transition={{ duration: 0.8 }}
          className="text-[#00f0ff] text-xs uppercase tracking-[0.25em] mb-4 font-mono"
        >
          Our Work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl font-black uppercase text-center leading-none tracking-tighter"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Featured <span className="text-[#00f0ff]">Builds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 text-gray-400 text-sm md:text-base text-center max-w-xl font-light tracking-wide"
        >
          A selection of builds, restorations, and upgrades that left our shop
          ready to perform.
        </motion.p>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-[90vw] mx-auto px-4 md:px-16 pb-32">
        <ul className="grid grid-cols-1 md:grid-cols-4 auto-rows md:auto-rows-[220px] gap-3 md:grid-flow-dense">
          {items.map((item, i) => (
            <motion.li
              key={`${item.src}-${item.alt}-${i}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              variants={fadeUp}
              onClick={() => setLightbox(item)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer bg-[#111] h-[180px] md:h-auto
                ${item.span ? spanClass[item.span] : ""}
              `}
            >
              {/* image with its own opacity fade on scroll into view */}
              <motion.img
                src={item.src}
                alt={item.alt}
                decoding="async"
                loading="lazy"
                draggable="false"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* tag + label — slides up on hover */}
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block bg-[#00f0ff] text-black text-[9px] uppercase tracking-widest font-bold font-mono px-2 py-0.5 mb-1">
                  {item.tag}
                </span>
                <p className="text-white text-sm font-semibold">{item.alt}</p>
              </div>

              {/* zoom icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6"
                    />
                  </svg>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              decoding="async"
              loading="lazy"
              draggable="false"
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-3 flex items-center justify-between">
              <div>
                <span className="inline-block bg-[#00f0ff] text-black text-[9px] uppercase tracking-widest font-bold font-mono px-2 py-0.5 mr-2">
                  {lightbox.tag}
                </span>
                <span className="text-white text-sm">{lightbox.alt}</span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-mono cursor-pointer"
              >
                Close ✕
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* ── BOTTOM CTA ── */}
      <div className="relative border-t border-white/[0.06] py-28 px-8 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00f0ff]/5 to-transparent" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#00f0ff]/8 blur-[100px] rounded-full" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative"
        >
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-4">
            Want results like these?
          </p>
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Your Build Could Be <span className="text-[#00f0ff]">Next.</span>
          </h2>
          <Link
            to="/support"
            className="inline-flex items-center gap-3 bg-[#00f0ff] hover:bg-[#00c8d4] transition-colors duration-300 px-12 py-4 text-black text-xs font-bold uppercase tracking-widest group"
          >
            Book a Service
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
