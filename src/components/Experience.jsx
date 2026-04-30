import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/resume";

const companyColors = {
  Altimetrik: "var(--pista)",
  SmarTek21: "var(--yellow-light)",
  Raksan: "#ffe0c0",
  JumpByte: "#e0d4f5",
};

export default function Experience() {
  const [activeCompany, setActiveCompany] = useState(0);
  const [expandedProject, setExpandedProject] = useState(0);

  const current = experience[activeCompany];

  return (
    <section id="experience" style={{ padding: "6rem 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Experience</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, marginTop: "1rem", color: "var(--ink)" }}
          >
            Where I've Made Impact
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "2.5rem", marginTop: "3rem" }}>
          {/* Sidebar — Company tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {experience.map((exp, i) => (
              <motion.button
                key={exp.company}
                onClick={() => { setActiveCompany(i); setExpandedProject(0); }}
                whileHover={{ x: 4 }}
                style={{
                  background: activeCompany === i ? companyColors[exp.company] || "var(--pista)" : "var(--white)",
                  border: activeCompany === i ? "2px solid var(--pista-dark)" : "2px solid transparent",
                  borderRadius: 10, padding: "0.85rem 1.25rem",
                  cursor: "pointer", textAlign: "left",
                  boxShadow: activeCompany === i ? "4px 4px 0 var(--pista-dark)" : "0 1px 4px rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.95rem" }}>{exp.company}</div>
                <div className="font-mono" style={{ fontSize: "0.65rem", color: "var(--ink-light)", marginTop: 2, letterSpacing: "0.05em" }}>
                  {exp.period}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Main panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompany}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              {/* Header */}
              <div
                style={{
                  background: companyColors[current.company] || "var(--pista-light)",
                  borderRadius: 14, padding: "1.5rem 2rem",
                  marginBottom: "1.5rem", border: "1px solid var(--pista-dark)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <h3 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--ink)" }}>
                      {current.role}
                    </h3>
                    <div style={{ color: "var(--pista-deep)", fontWeight: 600, marginTop: 2 }}>{current.company}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="font-mono" style={{ fontSize: "0.75rem", color: "var(--ink-muted)", letterSpacing: "0.08em" }}>
                      {current.period}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--ink-light)", marginTop: 2 }}>📍 {current.location}</div>
                  </div>
                </div>
              </div>

              {/* Projects accordion */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {current.projects.map((project, pi) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: pi * 0.1 }}
                    style={{
                      background: "var(--white)", borderRadius: 12,
                      border: expandedProject === pi ? "2px solid var(--pista-dark)" : "2px solid var(--pista-light)",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => setExpandedProject(expandedProject === pi ? -1 : pi)}
                      style={{
                        width: "100%", background: "none", border: "none", cursor: "pointer",
                        padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between",
                        alignItems: "center", textAlign: "left",
                      }}
                    >
                      <span style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.95rem" }}>{project.name}</span>
                      <motion.span
                        animate={{ rotate: expandedProject === pi ? 180 : 0 }}
                        style={{ color: "var(--pista-deep)", fontSize: "1.1rem", flexShrink: 0 }}
                      >
                        ↓
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {expandedProject === pi && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: "hidden" }}
                        >
                          <ul style={{ listStyle: "none", padding: "0 1.25rem 1.25rem" }}>
                            {project.highlights.map((h, hi) => (
                              <motion.li
                                key={hi}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: hi * 0.05 }}
                                style={{
                                  display: "flex", gap: "0.75rem", alignItems: "flex-start",
                                  padding: "0.4rem 0", fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.6,
                                }}
                              >
                                <span style={{ color: "var(--pista-deep)", flexShrink: 0, marginTop: 3 }}>◆</span>
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
