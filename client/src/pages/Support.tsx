import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  "General Maintenance",
  "Diagnostics",
  "Performance Upgrade",
  "Suspension / Brakes",
  "Engine / Drivetrain",
  "Exhaust",
  "Wheels / Tires",
  "Appearance / Protection",
  "Custom Fabrication",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function InfoBlock({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-white/[0.06] rounded-xl bg-[#111] p-6 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-[#00f0ff]">{icon}</span>
        <h3 className="text-[10px] uppercase tracking-widest font-mono text-gray-500">
          {label}
        </h3>
      </div>
      {children}
    </div>
  );
}

export default function Support() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) setSubmitted(true);
    else console.error("Failed to send");
  }

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
          Get in touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl font-black uppercase text-center leading-none tracking-tighter"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Book a <span className="text-[#00f0ff]">Service</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-5 text-gray-400 text-sm md:text-base text-center max-w-xl font-light tracking-wide"
        >
          Fill out the form and we'll get back to you within one business day to
          confirm your appointment.
        </motion.p>
      </div>
      {/* ── PAGE HEADER ── */}
      {/* <div className="relative pt-44 pb-20 px-8 md:px-16 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="pointer-events-none absolute top-1/2 right-1/3 -translate-y-1/2 w-[500px] h-[260px] bg-[#00f0ff]/8 blur-[120px] rounded-full" />

        <div className="relative max-w-[1400px] mx-auto md:px-16">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 0.9 }}
            className="text-[#00f0ff] text-[10px] uppercase tracking-[0.22em] font-mono mb-4"
          >
            Get in touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Book a <span className="text-[#00f0ff]">Service</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-gray-400 text-sm max-w-lg"
          >
            Fill out the form and we'll get back to you within one business day
            to confirm your appointment.
          </motion.p>
        </div>
      </div> */}

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* ── FORM ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-24 border border-white/[0.06] rounded-xl bg-[#111]"
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#00f0ff] flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#00f0ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2
                  className="text-3xl font-black uppercase tracking-tight mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  We Got Your Request
                </h2>
                <p className="text-gray-400 text-sm max-w-sm">
                  Someone from the RPM NYC team will reach out within one
                  business day to confirm your booking.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="mt-8 text-[10px] uppercase tracking-widest font-mono text-gray-500 hover:text-white transition-colors"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <div className="space-y-5">
                {/* Row: name + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Row: phone + service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="(718) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />

                  {/* Service select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest font-mono text-gray-500">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="bg-[#111] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors duration-200 appearance-none"
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-mono text-gray-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your car, what's going on, and any dates that work for you…"
                    className="bg-[#111] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-3 bg-[#00f0ff] hover:bg-[#00c8d4] transition-colors duration-300 px-10 py-4 text-black text-xs font-bold uppercase tracking-widest group"
                >
                  Send Request
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            )}
          </motion.div>

          {/* ── CONTACT INFO SIDEBAR ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="lg:col-span-2 space-y-8"
          >
            {/* Visit us */}
            <InfoBlock label="Visit Us" icon={<MapPinIcon />}>
              <Link
                to="https://www.google.com/maps/place/RPM+NYC/@40.7165944,-73.7404582,775m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c263d246037009:0xe9941f80e2931fe3!8m2!3d40.7165944!4d-73.7378833!16s%2Fg%2F1td2vtv5?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
              >
                217-85 98th Ave
                <br />
                Queens Village, NY 11429
              </Link>
            </InfoBlock>

            {/* Call us */}
            <InfoBlock label="Call Us" icon={<PhoneIcon />}>
              <a
                href="tel:7187403277"
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                (718) 740-3277
              </a>
            </InfoBlock>

            {/* Hours */}
            <InfoBlock label="Shop Hours" icon={<ClockIcon />}>
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
                        h.hours === "Closed"
                          ? "text-[#00f0ff]/50"
                          : "text-gray-300"
                      }
                    >
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoBlock>

            {/* Socials */}
            <InfoBlock label="Follow Us" icon={<StarIcon />}>
              <div className="flex gap-4">
                {[
                  {
                    label: "Instagram",
                    to: "https://www.instagram.com/rpmnyc/",
                  },
                  {
                    label: "Facebook",
                    to: "https://www.facebook.com/RPMNYCMOTORSPORTS/",
                  },
                  { label: "YouTube", to: "https://www.youtube.com/@rpmnyc" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    to={s.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-widest font-mono text-gray-500 hover:text-[#00f0ff] transition-colors duration-300"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </InfoBlock>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── HELPERS ── */

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] uppercase tracking-widest font-mono text-gray-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-[#111] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/50 transition-colors duration-200"
      />
    </div>
  );
}

function MapPinIcon() {
  return <img src="location.svg" className="w-4 h-4" />;
}

function PhoneIcon() {
  return <img src="phone.svg" className="w-4 h-4" />;
}

function ClockIcon() {
  return <img src="clock.svg" className="w-4 h-4" />;
}

function StarIcon() {
  return <img src="heart.svg" className="w-4 h-4" />;
}
