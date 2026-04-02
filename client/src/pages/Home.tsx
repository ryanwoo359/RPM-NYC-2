import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Card from "../components/Card";

import coolingSystem from "../assets/service-img/cooling-system.png";
import dynoTuning from "../assets/service-img/dyno-tuning.png";
import ecuTuning from "../assets/service-img/ecu-tuning.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const expertise = [
  {
    title: "General Maintenance",
    description: "Factory-spec service with the care your car deserves.",
    image: coolingSystem,
  },
  {
    title: "Performance Upgrades",
    description: "More power, better handling — built for the street or track.",
    image: dynoTuning,
  },
  {
    title: "Diagnostics & Repair",
    description: "Pinpoint any fault fast with our full OBD-II suite.",
    image: ecuTuning,
  },
];

const advantages = [
  {
    number: "01",
    title: "NYC Specialists",
    body: "We know the roads, the climate, and the demands of driving in the five boroughs.",
  },
  {
    number: "02",
    title: "No BS Pricing",
    body: "Transparent quotes up front. No hidden labour fees, no surprise line items.",
  },
  {
    number: "03",
    title: "Dealer-Level Tech",
    body: "Factory scan tools and trained technicians across European, Asian, and domestic marques.",
  },
  {
    number: "04",
    title: "Fast Turnaround",
    body: "Most jobs same-day or next-day. We respect your time as much as your car.",
  },
];

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/GTR drive.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* layered overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 px-8 md:px-20 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 1 }}
            className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-5"
          >
            New York City — Full Service Auto Shop
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="text-5xl md:text-8xl font-black uppercase leading-none tracking-tighter"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Built for <span className="text-[#00f0ff]">Drivers.</span>
            <br />
            Not Just Cars.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-6 text-gray-300 text-base md:text-lg max-w-lg leading-relaxed font-light"
          >
            Precision repairs, honest pricing, and performance upgrades —
            serving NYC drivers who actually care about their machines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <Link
              to="/support"
              className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-cyan-400 px-8 py-3.5 text-black transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-cyan-400/50 border border-white/20 cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-widest">
                Contact us
              </span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/30"></div>
              </div>
            </Link>

            <Link
              to="/gallery"
              className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-8 py-3.5 text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-widest">
                Featured Builds
              </span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
            What we're good at
          </p>
          <div className="flex items-end justify-between border-b border-white/[0.07] pb-6">
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Expertise
            </h2>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              All Services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className={i === 1 ? "md:scale-[1.03] md:z-10 relative" : ""}
            >
              <Card
                title={item.title}
                description={item.description}
                image={item.image}
                link="/services"
                variant="service"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 flex md:hidden justify-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 transition-colors px-8 py-3 text-xs font-bold uppercase tracking-widest"
          >
            All Services →
          </Link>
        </motion.div>
      </section>

      {/* ── DIVIDER STAT BAR ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="border-y border-white/[0.06] bg-gray-700/[0.7] py-10 px-8 md:px-16 bg-white/[0.02]"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "25+", label: "Years in NYC" },
            { stat: "1,000+", label: "Cars Serviced" },
            { stat: "50+", label: "Marques Covered" },
            { stat: "4.5★", label: "Average Rating" },
          ].map((item, i) => (
            <motion.div key={item.label} custom={i} variants={fadeUp}>
              <p
                className="text-4xl md:text-5xl font-black text-[#00f0ff] leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item.stat}
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mt-2 font-mono">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── RPM ADVANTAGE ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
            Why choose us
          </p>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none border-b border-white/[0.07] pb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            The <span className="italic text-[#14007e]">RPM</span>{" "}
            <span className="font-rocksalt text-[#9d9d9b] text-3xl md:text-4xl">
              nyc
            </span>{" "}
            Advantage
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {advantages.map((item, i) => (
            <motion.div
              key={item.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-[#080808] p-10 group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <span
                className="text-6xl font-black text-white/[0.20] leading-none select-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item.number}
              </span>
              <div className="mt-2 h-px w-8 bg-[#00f0ff] transition-all duration-500 group-hover:w-16" />
              <h3
                className="mt-4 text-xl font-bold uppercase tracking-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

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
            Let's get started
          </p>
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Your Car Deserves <span className="text-[#00f0ff]">Better.</span>
          </h2>
          <Link
            to="/support"
            className="inline-flex items-center gap-3 bg-[#00f0ff] hover:bg-[#00c8d4] transition-colors duration-300 px-12 py-4 text-black text-xs font-bold uppercase tracking-widest group"
          >
            Book Now
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
