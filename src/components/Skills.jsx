import { motion } from "framer-motion";
import { skills } from "../data/resume";

const icons = { Frontend:"🖥️", Backend:"⚙️", Databases:"🗄️", Architecture:"🏗️", "Cloud & DevOps":"☁️", Testing:"🧪", Tools:"🛠️", Practices:"📐" };
const colors = { Frontend:"var(--pista)", Backend:"var(--yellow-light)", Databases:"#ffe0c0", Architecture:"#e0f0ff", "Cloud & DevOps":"#f0e0ff", Testing:"#ffe0e0", Tools:"var(--pista-light)", Practices:"var(--yellow-light)" };

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ padding: "6rem 0", background: "var(--white)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-tag">Skills</span>
          <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)", fontWeight: 900, marginTop: "1rem", color: "var(--ink)" }}>My Tech Arsenal</h2>
          <p style={{ color: "var(--ink-muted)", marginTop: "0.6rem", maxWidth: 520, lineHeight: 1.7, fontSize: "clamp(0.88rem, 2vw, 1rem)" }}>
            A full-stack toolkit honed over 12+ years of enterprise engineering.
          </p>
        </motion.div>

        <div className="skills-grid">
          {Object.entries(skills).map(([cat, items], ci) => (
            <motion.div key={cat} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.06 }} whileHover={{ y: -3 }}
              style={{ background: colors[cat] || "var(--pista-light)", borderRadius: 14, padding: "clamp(0.85rem, 3vw, 1.4rem)", border: "1.5px solid rgba(0,0,0,0.06)", transition: "transform 0.2s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
                <span style={{ fontSize: "1.1rem" }}>{icons[cat]}</span>
                <h3 className="font-mono" style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)" }}>{cat}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {items.map((skill) => (
                  <span key={skill} style={{ padding: "0.22rem 0.55rem", background: "rgba(255,255,255,0.75)", borderRadius: 999, fontSize: "clamp(0.65rem, 1.5vw, 0.78rem)", fontWeight: 500, color: "var(--ink)", border: "1px solid rgba(0,0,0,0.08)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div style={{ marginTop: "3rem", overflow: "hidden", borderTop: "1px solid var(--pista-light)", borderBottom: "1px solid var(--pista-light)", padding: "0.85rem 0" }}>
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap" }}>
            {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((s, i) => (
              <span key={i} className="font-mono" style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: i%3===0?"var(--pista-deep)":i%3===1?"var(--yellow-dark)":"var(--ink-light)" }}>{s} ◆</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
