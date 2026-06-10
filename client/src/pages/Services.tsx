import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";

// Diagnostics & Tuning
import ecuTuning from "../assets/service-img/ecu-tuning.png";
import dynoTuning from "../assets/service-img/dyno-tuning.png";
import coolingSystem from "../assets/service-img/cooling-system.png";

// Repairs
import radCooling from "../assets/service-img/rad-cooling.png";

// Suspension
import wheelAlignment from "../assets/service-img/wheel-alignment.png";

// Placeholder for missing images
import person from "../assets/service-img/Person.png";

const serviceCategories = [
  {
    id: "diagnostics",
    label: "01",
    title: "Diagnostics & Tuning",
    tagline: "Precision-engineered performance starts here.",
    services: [
      {
        title: "ECU Diagnostics",
        image: ecuTuning,
        description:
          "Full OBD-II scanning and fault code analysis across all modules.",
        link: "#",
      },
      {
        title: "Dyno Tuning",
        image: dynoTuning,
        description:
          "Custom power maps optimized for your engine build and fuel.",
        link: "#",
      },
      {
        title: "General Maintenance",
        image: coolingSystem,
        description:
          "Oil, filters, fluids — factory intervals or custom schedules.",
        link: "#",
      },
      {
        title: "ECU Diagnostics",
        image: ecuTuning,
        description:
          "Full OBD-II scanning and fault code analysis across all modules.",
        link: "#",
      },
    ],
  },
  {
    id: "repairs",
    label: "02",
    title: "Repairs",
    tagline: "Fixed right the first time, every time.",
    services: [
      {
        title: "Engine Repair",
        image: person,
        description:
          "From head gaskets to full rebuilds on domestic and import engines.",
        link: "#",
      },
      {
        title: "Electrical & Wiring",
        image: person,
        description:
          "Tracing shorts, harness repairs, and custom wiring solutions.",
        link: "#",
      },
      {
        title: "Cooling System",
        image: radCooling,
        description: "Radiator, thermostat, water pump — keep temps in check.",
        link: "#",
      },
    ],
  },
  {
    id: "suspension",
    label: "03",
    title: "Suspension, Handling & Braking",
    tagline: "Feel every corner the way it was meant to be felt.",
    services: [
      {
        title: "Coilover Install",
        image: person,
        description:
          "Street and track coilover fitting with corner-weight setup.",
        link: "#",
      },
      {
        title: "Big Brake Kits",
        image: person,
        description:
          "Upgraded rotors, calipers, and pads for serious stopping power.",
        link: "#",
      },
      {
        title: "Alignment",
        image: wheelAlignment,
        description: "4-wheel alignment with custom camber and toe settings.",
        link: "#",
      },
    ],
  },
  {
    id: "wheels",
    label: "04",
    title: "Wheels, Tires & Alignment",
    tagline: "The four patches of rubber that matter most.",
    services: [
      {
        title: "Tire Mounting & Balancing",
        image: person,
        description: "Road-force balancing for a vibration-free, smooth ride.",
        link: "#",
      },
      {
        title: "Wheel Spacers",
        image: person,
        description:
          "Hub-centric spacers installed safely with extended studs.",
        link: "#",
      },
      {
        title: "TPMS Service",
        image: person,
        description: "Sensor replacement, reprogramming, and system resets.",
        link: "#",
      },
    ],
  },
  {
    id: "appearance",
    label: "05",
    title: "Appearance & Protection",
    tagline: "Looks as sharp as it runs.",
    services: [
      {
        title: "Paint Protection Film",
        image: person,
        description:
          "Self-healing PPF on high-impact zones or full-body wraps.",
        link: "#",
      },
      {
        title: "Ceramic Coating",
        image: person,
        description:
          "Nano-ceramic protection with years of hydrophobic brilliance.",
        link: "#",
      },
      {
        title: "Window Tint",
        image: person,
        description: "Precision-cut film with heat rejection and UV blocking.",
        link: "#",
      },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <div className="bg-[#080808] text-white">
      {/* ── HERO BANNER ── */}
      <div className="relative flex flex-col items-center justify-center pt-48 pb-24 px-6 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f0ff]/10 blur-[120px] rounded-full" />

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.25em" }}
          transition={{ duration: 0.8 }}
          className="text-[#00f0ff] text-xs uppercase text-center md:text-left tracking-[0.25em] mb-4 font-mono"
        >
          RPM NYC — Full Service Auto Shop
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl font-black uppercase text-center leading-none tracking-tighter"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          What We <span className="text-[#00f0ff]">Do</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 text-gray-400 text-sm md:text-base text-center max-w-xl font-light tracking-wide"
        >
          Five categories. Every service your vehicle needs — from a routine oil
          change to a full custom build.
        </motion.p>
      </div>

      {/* ── SERVICE CATEGORIES ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 pb-32 space-y-28">
        {serviceCategories.map((category) => (
          <motion.div
            key={category.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
          >
            {/* Category header */}
            <div className="flex items-end gap-5 mb-8 border-b border-white/[0.1] pb-5">
              <span
                className="text-[80px] font-black leading-none text-white/[0.20] select-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {category.label}
              </span>
              <div className="mb-2">
                <h2
                  className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {category.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1 tracking-wide">
                  {category.tagline}
                </p>
              </div>
              <div className="ml-auto mb-3 hidden md:block h-px w-16 bg-[#00f0ff]" />
            </div>

            {/* Cards grid */}
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  custom={i + 1}
                  variants={fadeUp}
                >
                  <Card
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    link={service.link}
                    variant="service"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="relative border-t border-white/[0.06] py-24 px-6 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#00f0ff]/5 to-transparent" />
        <p className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-4">
          Ready to book?
        </p>
        <h2
          className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Let's Get Your Car <span className="text-[#00f0ff]">Sorted.</span>
        </h2>
        <Link
          to="/support"
          className="inline-flex items-center gap-3 bg-[#00f0ff] hover:bg-[#00c8d4] transition-colors duration-300 px-12 py-4 text-black text-xs font-bold uppercase tracking-widest group"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
