import { motion } from "framer-motion";
import { personal } from "../data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 0", background: "var(--white)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ marginBottom: "1rem" }}
        >
          <span className="section-tag">About Me</span>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginTop: "2rem" }}>
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Profile photo in About */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ width: 100, height: 100, borderRadius: "50%", overflow: "hidden", border: "3px solid var(--pista-dark)", marginBottom: "1.5rem", boxShadow: "4px 4px 0 var(--yellow)" }}
            >
              <img src="/ankita.png" alt="Ankita Parasrampuria" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </motion.div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, lineHeight: 1.15, color: "var(--ink)" }}
            >
              Engineering at scale,{" "}
              <em style={{ color: "var(--pista-deep)" }}>with purpose.</em>
            </h2>
            <p style={{ marginTop: "1.5rem", lineHeight: 1.8, color: "var(--ink-muted)", fontSize: "1.05rem" }}>
              {personal.summary}
            </p>
            <div
              style={{
                marginTop: "2rem", padding: "1.25rem 1.5rem",
                background: "var(--pista-light)", borderRadius: 12,
                borderLeft: "4px solid var(--pista-deep)",
              }}
            >
              <p className="font-mono" style={{ fontSize: "0.8rem", color: "var(--pista-deep)", lineHeight: 1.6 }}>
                "I believe great software is built at the intersection of clean architecture, empowered teams, and relentless focus on the user experience."
              </p>
            </div>
          </motion.div>

          {/* Right — highlights */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15 }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  icon: "⚡",
                  title: "Performance-First",
                  desc: "Lazy loading, code splitting, microfrontend architecture — I build fast by default.",
                },
                {
                  icon: "♿",
                  title: "Accessibility Champion",
                  desc: "WAI-ARIA certified implementations validated with NVDA screen reader for inclusive experiences.",
                },
                {
                  icon: "🤖",
                  title: "AI-Augmented Dev",
                  desc: "Built Claude-powered AI agents to automate code review and documentation generation.",
                },
                {
                  icon: "🌏",
                  title: "i18n Ready",
                  desc: "Designed dynamic multi-language support enabling seamless global user experiences.",
                },
                {
                  icon: "👥",
                  title: "Team Leadership",
                  desc: "Led 4-person UI engineering teams, driving mentorship, performance reviews, and delivery.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    padding: "1rem 1.25rem", borderRadius: 10,
                    background: "var(--cream)", border: "1px solid var(--pista-light)",
                    cursor: "default",
                  }}
                >
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.6 }}>{item.desc}</div>
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
