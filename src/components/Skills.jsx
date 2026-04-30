import { motion } from "framer-motion";
import { skills } from "../data/resume";

const categoryIcons = {
  Frontend: "🖥️",
  Backend: "⚙️",
  Databases: "🗄️",
  Architecture: "🏗️",
  "Cloud & DevOps": "☁️",
  Testing: "🧪",
  Tools: "🛠️",
  Practices: "📐",
};

const categoryColors = {
  Frontend: "var(--pista)",
  Backend: "var(--yellow-light)",
  Databases: "#ffe0c0",
  Architecture: "#e0f0ff",
  "Cloud & DevOps": "#f0e0ff",
  Testing: "#ffe0e0",
  Tools: "var(--pista-light)",
  Practices: "var(--yellow-light)",
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 0", background: "var(--white)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Skills</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, marginTop: "1rem", color: "var(--ink)" }}
          >
            My Tech Arsenal
          </h2>
          <p style={{ color: "var(--ink-muted)", marginTop: "0.75rem", maxWidth: 540, lineHeight: 1.7 }}>
            A full-stack toolkit honed over 12+ years, from pixel-perfect frontends to cloud-native architectures.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
            marginTop: "3rem",
          }}
        >
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              whileHover={{ y: -4 }}
              className="card-hover"
              style={{
                background: categoryColors[category] || "var(--pista-light)",
                borderRadius: 14,
                padding: "1.5rem",
                border: "1.5px solid rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.3rem" }}>{categoryIcons[category]}</span>
                <h3 className="font-mono" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)" }}>
                  {category}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + si * 0.04 }}
                    style={{
                      padding: "0.3rem 0.75rem",
                      background: "rgba(255,255,255,0.7)",
                      borderRadius: 999,
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <div style={{ marginTop: "3.5rem", overflow: "hidden", borderTop: "1px solid var(--pista-light)", borderBottom: "1px solid var(--pista-light)", padding: "1rem 0" }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap" }}
          >
            {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((skill, i) => (
              <span
                key={i}
                className="font-mono"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: i % 3 === 0 ? "var(--pista-deep)" : i % 3 === 1 ? "var(--yellow-dark)" : "var(--ink-light)",
                }}
              >
                {skill} ◆
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
