import { motion } from "framer-motion";
import { education, certifications } from "../data/resume";

export default function Education() {
  return (
    <section id="education" style={{ padding: "6rem 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Education & Certifications</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, marginTop: "1rem", color: "var(--ink)" }}
          >
            Foundations of Expertise
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginTop: "3rem" }}>
          {/* Education */}
          <div>
            <h3 className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--pista-deep)", marginBottom: "1.5rem" }}>
              Academic Background
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  style={{
                    display: "flex", gap: "1.25rem", alignItems: "flex-start",
                    background: "var(--white)", borderRadius: 12,
                    padding: "1.25rem 1.5rem",
                    border: "1.5px solid var(--pista-light)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: i === 0 ? "var(--pista)" : "var(--yellow-light)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: "1.3rem",
                  }}>
                    🎓
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--ink)", lineHeight: 1.3 }}>{edu.degree}</div>
                    <div style={{ color: "var(--pista-deep)", fontSize: "0.875rem", marginTop: 3 }}>{edu.institution}</div>
                    <div className="font-mono" style={{ fontSize: "0.7rem", color: "var(--ink-light)", marginTop: 4, letterSpacing: "0.08em" }}>
                      {edu.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--pista-deep)", marginBottom: "1.5rem" }}>
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: i === 0 ? "var(--pista-light)" : "var(--yellow-light)",
                    borderRadius: 12, padding: "1.25rem 1.5rem",
                    border: `1.5px solid ${i === 0 ? "var(--pista-dark)" : "var(--yellow-dark)"}`,
                    display: "flex", gap: "1rem", alignItems: "center",
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: "var(--white)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: "1.3rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}>
                    🏅
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--ink)" }}>{cert.name}</div>
                    <div className="font-mono" style={{ fontSize: "0.7rem", color: "var(--ink-muted)", marginTop: 4, letterSpacing: "0.08em" }}>
                      {cert.date}
                    </div>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <span style={{
                      padding: "0.2rem 0.6rem", borderRadius: 999,
                      background: "var(--white)", fontSize: "0.65rem",
                      fontFamily: "'Space Mono', monospace", color: "var(--pista-deep)",
                      letterSpacing: "0.05em",
                    }}>
                      VERIFIED
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* CTA to add more */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{
                  borderRadius: 12, padding: "1.25rem 1.5rem",
                  border: "2px dashed var(--pista-dark)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--ink-light)", fontSize: "0.875rem",
                  gap: "0.5rem",
                }}
              >
                <span>+</span>
                <span>More certifications in progress</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
