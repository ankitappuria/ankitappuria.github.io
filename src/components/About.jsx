import { motion } from "framer-motion";
import { personal } from "../data/resume";

const highlights = [
  { icon: "⚡", title: "Performance-First", desc: "Lazy loading, code splitting, microfrontend architecture — fast by default." },
  { icon: "♿", title: "Accessibility Champion", desc: "WAI-ARIA implementations validated with NVDA for inclusive experiences." },
  { icon: "🤖", title: "AI-Augmented Dev", desc: "Built Claude-powered agents to automate code review and documentation." },
  { icon: "🌏", title: "i18n Ready", desc: "Dynamic multi-language support enabling seamless global user experiences." },
  { icon: "👥", title: "Team Leadership", desc: "Led 4-person UI teams, driving mentorship, reviews, and delivery." },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ padding: "6rem 0", background: "var(--white)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "2rem" }}>
          <span className="section-tag">About Me</span>
        </motion.div>

        <div className="two-col">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.div whileHover={{ scale: 1.03 }} style={{ width: 88, height: 88, borderRadius: "50%", overflow: "hidden", border: "3px solid var(--pista-dark)", marginBottom: "1.5rem", boxShadow: "4px 4px 0 var(--yellow)" }}>
              <img src="/ankita.png" alt="Ankita" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </motion.div>
            <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.15, color: "var(--ink)" }}>
              Engineering at scale,{" "}<em style={{ color: "var(--pista-deep)" }}>with purpose.</em>
            </h2>
            <p style={{ marginTop: "1.25rem", lineHeight: 1.8, color: "var(--ink-muted)", fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
              {personal.summary}
            </p>
            <div style={{ marginTop: "1.75rem", padding: "1.1rem 1.4rem", background: "var(--pista-light)", borderRadius: 12, borderLeft: "4px solid var(--pista-deep)" }}>
              <p className="font-mono" style={{ fontSize: "0.78rem", color: "var(--pista-deep)", lineHeight: 1.65 }}>
                "I believe great software is built at the intersection of clean architecture, empowered teams, and relentless focus on the user experience."
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {highlights.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ x: 4 }}
                  style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start", padding: "0.85rem 1rem", borderRadius: 10, background: "var(--cream)", border: "1px solid var(--pista-light)" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 2, fontSize: "0.9rem" }}>{item.title}</div>
                    <div style={{ fontSize: "0.83rem", color: "var(--ink-muted)", lineHeight: 1.55 }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
