import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Card from "../components/Card";

import coolingSystem from "../assets/service-img/cooling-system.png";
import dynoTuning from "../assets/service-img/dyno-tuning.png";
import ecuTuning from "../assets/service-img/ecu-tuning.png";

// ── Constants ──────────────────────────────────────────────────────────────

const VIEWPORT = { once: true, margin: "-60px" } as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const EXPERTISE = [
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

const STATS = [
  { stat: "25+", label: "Years in NYC" },
  { stat: "1,000+", label: "Cars Serviced" },
  { stat: "50+", label: "Marques Covered" },
  { stat: "4.5★", label: "Average Rating" },
];

const ADVANTAGES = [
  {
    number: 1, // plain number; rendered as String(n).padStart(2, "0")
    title: "NYC Specialists",
    body: "We know the roads, the climate, and the demands of driving in the five boroughs.",
  },
  {
    number: 2,
    title: "No BS Pricing",
    body: "Transparent quotes up front. No hidden labour fees, no surprise line items.",
  },
  {
    number: 3,
    title: "Dealer-Level Tech",
    body: "Factory scan tools and trained technicians across European, Asian, and domestic marques.",
  },
  {
    number: 4,
    title: "Fast Turnaround",
    body: "Most jobs same-day or next-day. We respect your time as much as your car.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

/**
 * A call-to-action link styled as a button.
 * Named CTAButton (not NavButton) because it isn't navigation chrome —
 * it's a primary/secondary action prompt within page content.
 */
function CTAButton({
  to,
  variant,
  children,
}: {
  to: string;
  variant: "primary" | "ghost";
  children: React.ReactNode;
}) {
  const base =
    "group/button relative inline-flex items-center justify-center overflow-hidden rounded-md px-8 py-3.5 transition-all duration-300 ease-in-out hover:scale-110 border border-white/20 cursor-pointer";
  const styles =
    variant === "primary"
      ? `${base} bg-cyan-400 text-black hover:shadow-xl hover:shadow-cyan-400/50`
      : `${base} bg-gray-800/30 backdrop-blur-lg text-white hover:shadow-xl hover:shadow-gray-600/50`;

  return (
    <Link to={to} className={styles}>
      <span className="text-xs font-bold uppercase tracking-widest">
        {children}
      </span>
      <div
        aria-hidden="true"
        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
      >
        <div className="relative h-full w-10 bg-white/30" />
      </div>
    </Link>
  );
}

/**
 * Decorative eyebrow label that sits above a heading.
 * Marked aria-hidden because the heading immediately below it carries
 * the full semantic meaning; this is purely a visual accent.
 */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      aria-hidden="true"
      className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-3"
    >
      {children}
    </p>
  );
}

/**
 * Key statistics rendered as a description list (<dl>) so that each
 * figure (<dd>) is semantically tied to its label (<dt>).
 */
function StatBar() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={fadeUp}
      className="border-y border-white/[0.06] bg-gray-700/[0.7] py-10 px-8 md:px-16 bg-white/[0.06]"
    >
      <dl className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 text-center">
        {STATS.map(({ stat, label }, i) => (
          <motion.div
            key={label}
            custom={i}
            variants={fadeUp}
            className={`
          py-4 px-8
          ${i % 2 !== 0 ? "border-l border-white/[0.06]" : ""}
          ${i >= 2 ? "border-t border-white/[0.06] md:border-t-0" : ""}
          md:border-l md:first:border-l-0
        `}
          >
            <dd className="text-4xl md:text-5xl font-black text-[#00f0ff] leading-none">
              {stat}
            </dd>
            <dt className="text-gray-500 text-xs uppercase tracking-widest mt-2 font-mono">
              {label}
            </dt>
          </motion.div>
        ))}
      </dl>
    </motion.div>
  );
}

function BottomCTA() {
  return (
    <div className="relative border-t border-white/[0.06] py-28 px-8 text-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00f0ff]/5 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#00f0ff]/8 blur-[100px] rounded-full"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={fadeUp}
        className="relative"
      >
        <p
          aria-hidden="true"
          className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-4"
        >
          Let's get started
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
          Your Car Deserves <span className="text-[#00f0ff]">Better.</span>
        </h2>
        <Link
          to="/support"
          className="inline-flex items-center gap-3 bg-[#00f0ff] hover:bg-[#00c8d4] transition-colors duration-300 px-12 py-4 text-black text-xs font-bold uppercase tracking-widest group"
        >
          Book Now
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    // <main> identifies the primary content of the document — one per page.
    <div className="text-white overflow-x-hidden">
      {/* HERO */}
      <section
        aria-label="Hero"
        className="relative min-h-[100dvh] flex items-center"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/GTR drive.mp4"
          autoPlay
          loop
          muted
          playsInline
          // Decorative background; no meaningful content for AT to announce.
          aria-hidden="true"
          title="Decorative background video of a car driving"
        />
        {/* Overlay gradients are purely decorative */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080808] to-transparent"
        />

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
            <CTAButton to="/support" variant="primary">
              Contact us
            </CTAButton>
            <CTAButton to="/gallery" variant="ghost">
              Featured Builds
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        aria-labelledby="expertise-heading"
        className="max-w-[1400px] mx-auto px-8 md:px-16 py-32"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-14"
        >
          <SectionLabel>What we're good at</SectionLabel>
          <div className="flex items-end justify-between border-b border-white/[0.07] pb-6">
            <h2
              id="expertise-heading"
              className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
            >
              Our Expertise
            </h2>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              All Services
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
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
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mt-10 flex md:hidden justify-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 transition-colors px-8 py-3 text-xs font-bold uppercase tracking-widest"
          >
            All Services
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </section>

      <StatBar />

      {/* RPM ADVANTAGE */}
      <section
        aria-labelledby="advantage-heading"
        className="max-w-[1400px] mx-auto px-8 md:px-16 py-32"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
          className="mb-14"
        >
          <SectionLabel>Why choose us</SectionLabel>
          <h2
            id="advantage-heading"
            className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none border-b border-white/[0.07] pb-6"
          >
            The <span className="italic text-[#14007e]">RPM</span>{" "}
            <span className="font-rocksalt text-[#9d9d9b] text-3xl md:text-4xl">
              nyc
            </span>{" "}
            Advantage
          </h2>
        </motion.div>

        <div className="relative py-4">
          {/* Decorative vertical spine — hidden from AT */}
          <div
            aria-hidden="true"
            className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00f0ff]/30 to-transparent md:hidden"
          />

          {/* <ul> because this is a list of peer features, not an ordered sequence */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
            {ADVANTAGES.map((item, i) => (
              <motion.li
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i}
                variants={fadeUp}
                className="relative group flex gap-5 p-7 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent hover:border-[#00f0ff]/30 hover:from-[#00f0ff]/[0.05] transition-all duration-500 cursor-default"
              >
                {/* Decorative glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 40px 0 rgba(0,240,255,0.04)" }}
                />

                {/* Check icon column */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-1">
                  <div className="w-8 h-8 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 flex items-center justify-center group-hover:bg-[#00f0ff]/20 group-hover:border-[#00f0ff]/70 transition-all duration-300">
                    <svg
                      className="w-3.5 h-3.5 text-[#00f0ff]"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7l3.5 3.5L12 3.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    aria-hidden="true"
                    className="flex-1 w-px bg-gradient-to-b from-[#00f0ff]/20 to-transparent"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    {/* Decorative ordinal badge — aria-hidden so AT reads the <h3> title only */}
                    <span
                      aria-hidden="true"
                      className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00f0ff]/60"
                    >
                      {String(item.number).padStart(2, "0")}
                    </span>
                    <div
                      aria-hidden="true"
                      className="h-px flex-1 bg-white/[0.06]"
                    />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}
