import { motion, type Variants } from "framer-motion";
import Card from "../components/Card";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const values = [
  {
    number: "01",
    title: "Honest Work",
    body: "No upsells, no fluff. We tell you what your car needs and why — nothing more.",
  },
  {
    number: "02",
    title: "Built to Last",
    body: "We treat every repair like it's going on our own car. Quality parts, quality labour.",
  },
  {
    number: "03",
    title: "Driver First",
    body: "From weekend warriors to daily commuters — we respect every build and every budget.",
  },
];

const team = [
  {
    title: "John Doe",
    role: "Lead Technician",
    description: "Specializes in European imports and advanced diagnostics.",
    image: "./employee/3D7A5288-2.jpg",
  },
  {
    title: "John Doe",
    role: "Performance Specialist",
    description: "Focuses on engine tuning and custom mods.",
    image: "./employee/3D7A5290-2.jpg",
  },
];

export default function About() {
  return (
    <div className="text-white overflow-x-hidden">
      {/* ── PAGE HEADER ── */}
      <div className="relative pt-44 pb-20 px-8 md:px-16 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[260px] bg-[#00f0ff]/8 blur-[120px] rounded-full" />

        <div className="relative max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 0.9 }}
            className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-4"
          >
            Who we are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            About <span className="text-[#00f0ff]">RPM</span>
            <span className="font-rocksalt text-[#9d9d9b] text-4xl md:text-5xl ml-3">
              nyc
            </span>
          </motion.h1>
        </div>
      </div>

      {/* ── OUR STORY ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 pb-32">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00f0ff]/20 to-transparent" />
            <img
              src="rpm motors.jpg"
              alt="RPM NYC shop"
              className="relative rounded-2xl w-full h-auto object-cover"
              draggable="false"
            />
            {/* floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#111] border border-white/10 rounded-xl px-5 py-4 hidden md:block">
              <p
                className="text-3xl font-black text-[#00f0ff] leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                25+
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-1">
                Years in NYC
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 space-y-6"
          >
            <div>
              <p className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
                Our Story
              </p>
              <h2
                className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none border-b border-white/[0.07] pb-6 mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Born in the Boroughs.
                <br />
                <span className="text-[#00f0ff]">Built for the Road.</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              We're a full-service automotive facility built to support every
              aspect of your vehicle — whether it's routine maintenance,
              advanced diagnostics, or serious performance upgrades.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We believe great performance starts with a properly maintained
              foundation. That's why we treat maintenance as seriously as
              modification. Every car that rolls into our bay gets the same
              attention, regardless of make, model, or mileage.
            </p>

            <div className="flex gap-8 pt-2">
              {[
                { stat: "1,000+", label: "Cars Serviced" },
                { stat: "50+", label: "Marques" },
                { stat: "4.5★", label: "Avg Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-2xl font-black text-white leading-none"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {s.stat}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="border-t border-white/[0.06] bg-[#0c0c0c]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <p className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
              What drives us
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none border-b border-white/[0.07] pb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {values.map((item, i) => (
              <motion.div
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-[#0c0c0c] p-10 group hover:bg-[#111] transition-colors duration-300"
              >
                <span
                  className="text-6xl font-black text-white/[0.12] leading-none select-none"
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
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEAM ── */}
      <section className="max-w-[1400px] mx-auto px-8 md:px-16 py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <p className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-3">
            The people behind the work
          </p>
          <h2
            className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none border-b border-white/[0.07] pb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Meet the Team
          </h2>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={`${member.title}-${i}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
            >
              <Card
                title={member.title}
                role={member.role}
                description={member.description}
                image={member.image}
                variant="employee"
              />
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
            Ready to come in?
          </p>
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Let's Work on <span className="text-[#00f0ff]">Your Car.</span>
          </h2>
          <a
            href="/support"
            className="inline-flex items-center gap-3 bg-[#00f0ff] hover:bg-[#00c8d4] transition-colors duration-300 px-12 py-4 text-black text-xs font-bold uppercase tracking-widest group"
          >
            Book a Service
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
