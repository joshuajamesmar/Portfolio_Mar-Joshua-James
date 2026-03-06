import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "../../data/data";
import { useInView } from "../../hooks/useInView";

function Field({ label, type = "text", value, onChange, error, multiline = false }) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        rows={multiline ? 5 : undefined}
        className={`w-full bg-black/[0.03] dark:bg-white/[0.03] border ${
          error
            ? "border-red-400/50"
            : "border-black/8 dark:border-white/8 focus:border-black/20 dark:focus:border-white/20"
        } rounded-xl px-4 py-3.5 text-sm text-black/80 dark:text-white/80 placeholder:text-black/25 dark:placeholder:text-white/20 focus:outline-none transition-colors duration-200 resize-none`}
        aria-label={label}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter a valid email";
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length) return setErrors(newErrors);

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mjgeqzjl", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("idle");
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.p
              className="text-xs uppercase tracking-widest text-[#4f8ef7] mb-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              Get in touch
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl font-extralight text-black dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let's build
              <br />
              something great
            </motion.h2>
            <motion.p
              className="text-black/40 dark:text-white/40 text-sm leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind, want to collaborate, or looking for a dedicated developer to join your team? Drop me a message and I’ll get back to you.
            </motion.p>

            <motion.a
              href={`mailto:${personal.email}`}
              className="group flex items-center gap-3 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            >
              <div className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 flex items-center justify-center group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="text-sm">{personal.email}</span>
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
              className="group flex items-center gap-3 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 flex items-center justify-center group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </div>
                <span style={{ whiteSpace: "pre-line" }} className="text-sm">{personal.phone}</span>
              </div>
            </motion.a>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {status === "sent" ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl text-black dark:text-white font-medium mb-2">Message sent</h3>
                <p className="text-black/40 dark:text-white/40 text-sm">I'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <Field label="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} error={errors.name} />
                <Field label="Email address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} error={errors.email} />
                <Field label="What's on your mind?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} error={errors.message} multiline />

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#4f8ef7] hover:bg-[#3d7de6] text-white font-medium text-sm transition-colors duration-200 disabled:opacity-50"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </span>
                  ) : (
                    "Send message"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
