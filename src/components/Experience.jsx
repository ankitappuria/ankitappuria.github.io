import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/resume";

const companyColors = {
  Altimetrik: "var(--pista)", SmarTek21: "var(--yellow-light)", Raksan: "#ffe0c0", JumpByte: "#e0d4f5",
};

export default function Experience() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(0);
  const current = experience[active];

  const selectCompany = (i) => { setActive(i); setExpanded(0); };

  return (
    <section id="experience" className="section-pad" style={{ padding: "6rem 0", background: "var(--cream)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "2rem" }}>
          <span className="section-tag">Experience</span>
          <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)", fontWeight: 900, marginTop: "1rem", color: "var(--ink)" }}>
            Where I've Made Impact
          </h2>
        </motion.div>

        {/* Mobile horizontal tabs */}
        <div className="company-tabs-mobile">
          {experience.map((exp, i) => (
            <button key={exp.company} onClick={() => selectCompany(i)}
              style={{ flexShrink: 0, padding: "0.6rem 1rem", borderRadius: 10, cursor: "pointer", fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em", whiteSpace: "nowrap", border: active === i ? "2px solid var(--pista-dark)" : "2px solid var(--pista-light)", background: active === i ? companyColors[exp.company] || "var(--pista)" : "var(--white)", boxShadow: active === i ? "3px 3px 0 var(--pista-dark)" : "none", transition: "all 0.2s" }}>
              {exp.company}
            </button>
          ))}
        </div>

        <div className="exp-grid">
          {/* Sidebar — desktop */}
          <div className="company-sidebar">
            {experience.map((exp, i) => (
              <motion.button key={exp.company} onClick={() => selectCompany(i)} whileHover={{ x: 4 }}
                style={{ background: active === i ? companyColors[exp.company] || "var(--pista)" : "var(--white)", border: active === i ? "2px solid var(--pista-dark)" : "2px solid transparent", borderRadius: 10, padding: "0.85rem 1.1rem", cursor: "pointer", textAlign: "left", boxShadow: active === i ? "4px 4px 0 var(--pista-dark)" : "0 1px 4px rgba(0,0,0,0.06)", transition: "all 0.2s ease" }}>
                <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.9rem" }}>{exp.company}</div>
                <div className="font-mono" style={{ fontSize: "0.62rem", color: "var(--ink-light)", marginTop: 3, letterSpacing: "0.05em" }}>{exp.period}</div>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              {/* Header card */}
              <div style={{ background: companyColors[current.company] || "var(--pista-light)", borderRadius: 14, padding: "1.25rem 1.5rem", marginBottom: "1.1rem", border: "1px solid var(--pista-dark)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <h3 className="font-display" style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", fontWeight: 700, color: "var(--ink)" }}>{current.role}</h3>
                    <div style={{ color: "var(--pista-deep)", fontWeight: 600, marginTop: 2, fontSize: "0.9rem" }}>{current.company}</div>
                  </div>
                  <div>
                    <div className="font-mono" style={{ fontSize: "0.68rem", color: "var(--ink-muted)", letterSpacing: "0.08em" }}>{current.period}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--ink-light)", marginTop: 2 }}>📍 {current.location}</div>
                  </div>
                </div>
              </div>

              {/* Projects accordion */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {current.projects.map((proj, pi) => (
                  <motion.div key={proj.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: pi * 0.08 }}
                    style={{ background: "var(--white)", borderRadius: 12, border: expanded === pi ? "2px solid var(--pista-dark)" : "2px solid var(--pista-light)", overflow: "hidden" }}>
                    <button onClick={() => setExpanded(expanded === pi ? -1 : pi)}
                      style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "0.9rem 1.1rem", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                      <span style={{ fontWeight: 600, color: "var(--ink)", fontSize: "clamp(0.82rem, 2vw, 0.95rem)", paddingRight: "0.5rem" }}>{proj.name}</span>
                      <motion.span animate={{ rotate: expanded === pi ? 180 : 0 }} style={{ color: "var(--pista-deep)", flexShrink: 0 }}>↓</motion.span>
                    </button>
                    <AnimatePresence>
                      {expanded === pi && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                          <ul style={{ listStyle: "none", padding: "0 1.1rem 1.1rem" }}>
                            {proj.highlights.map((h, hi) => (
                              <motion.li key={hi} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: hi * 0.04 }}
                                style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", padding: "0.35rem 0", fontSize: "clamp(0.8rem, 2vw, 0.875rem)", color: "var(--ink-muted)", lineHeight: 1.6 }}>
                                <span style={{ color: "var(--pista-deep)", flexShrink: 0, marginTop: 4 }}>◆</span>
                                {h}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
