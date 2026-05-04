import { motion } from "framer-motion";
import { education, certifications } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="section-pad" style={{ padding: "6rem 0", background: "var(--cream)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "2rem" }}>
          <span className="section-tag">Education & Certifications</span>
          <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)", fontWeight: 900, marginTop: "1rem", color: "var(--ink)" }}>Foundations of Expertise</h2>
        </motion.div>

        <div className="two-col">
          <div>
            <h3 className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--pista-deep)", marginBottom: "1.1rem" }}>Academic Background</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {education.map((edu, i) => (
                <motion.div key={edu.degree} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.13 }}
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "var(--white)", borderRadius: 12, padding: "1.1rem 1.25rem", border: "1.5px solid var(--pista-light)", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: i===0?"var(--pista)":"var(--yellow-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.2rem" }}>🎓</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--ink)", lineHeight: 1.3, fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>{edu.degree}</div>
                    <div style={{ color: "var(--pista-deep)", fontSize: "0.83rem", marginTop: 3 }}>{edu.institution}</div>
                    <div className="font-mono" style={{ fontSize: "0.62rem", color: "var(--ink-light)", marginTop: 4, letterSpacing: "0.08em" }}>{edu.period}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--pista-deep)", marginBottom: "1.1rem" }}>Certifications</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {certifications.map((cert, i) => (
                <motion.div key={cert.name} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.13 }} whileHover={{ scale: 1.02 }}
                  style={{ background: i===0?"var(--pista-light)":"var(--yellow-light)", borderRadius: 12, padding: "1.1rem 1.25rem", border: `1.5px solid ${i===0?"var(--pista-dark)":"var(--yellow-dark)"}`, display: "flex", gap: "0.9rem", alignItems: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>🏅</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "clamp(0.85rem, 2vw, 0.92rem)" }}>{cert.name}</div>
                    <div className="font-mono" style={{ fontSize: "0.62rem", color: "var(--ink-muted)", marginTop: 4, letterSpacing: "0.08em" }}>{cert.date}</div>
                  </div>
                  <span style={{ padding: "0.2rem 0.55rem", borderRadius: 999, background: "var(--white)", fontSize: "0.58rem", fontFamily: "'Space Mono', monospace", color: "var(--pista-deep)", letterSpacing: "0.05em", flexShrink: 0 }}>VERIFIED</span>
                </motion.div>
              ))}
              <div style={{ borderRadius: 12, padding: "1rem 1.25rem", border: "2px dashed var(--pista-dark)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-light)", fontSize: "0.85rem", gap: "0.4rem" }}>
                <span>+</span><span>More certifications in progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
