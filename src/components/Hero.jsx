import { motion } from "framer-motion";
import { personal } from "../data/resume";

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", background: "var(--cream)", paddingTop: "5rem", paddingBottom: "4rem" }}>
      {/* Blobs */}
      <motion.div animate={{ scale: [1,1.1,1], rotate: [0,5,0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "10%", right: "-5%", width: "clamp(200px, 40vw, 500px)", height: "clamp(200px, 40vw, 500px)", borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%", background: "var(--pista)", opacity: 0.35, filter: "blur(60px)" }} />
      <motion.div animate={{ scale: [1,1.15,1], rotate: [0,-8,0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: "absolute", bottom: "5%", left: "-10%", width: "clamp(180px, 35vw, 400px)", height: "clamp(180px, 35vw, 400px)", borderRadius: "40% 60% 30% 70% / 60% 40% 50% 50%", background: "var(--yellow)", opacity: 0.25, filter: "blur(70px)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(var(--pista-deep) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Mobile photo — shown above text on small screens */}
        <div className="hero-photo-mobile" style={{ marginBottom: "2rem" }}>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <motion.div animate={{ y: [0,-10,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ position: "relative", display: "inline-block" }}>
              <div style={{ position: "absolute", top: 8, left: 8, width: 160, height: 200, borderRadius: 20, background: "var(--yellow)", zIndex: 0 }} />
              <div style={{ position: "absolute", top: -6, left: -6, width: 160, height: 200, borderRadius: 20, background: "var(--pista)", zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, width: 160, height: 200, borderRadius: 20, overflow: "hidden", border: "3px solid var(--white)", boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }}>
                <img src="/ankita.png" alt="Ankita" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ position: "absolute", top: -10, right: -14, zIndex: 2, background: "var(--yellow)", borderRadius: 999, padding: "0.3rem 0.7rem", border: "2px solid var(--yellow-dark)" }}>
                <span className="font-mono" style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--ink)" }}>12+ yrs ⚡</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Main hero grid */}
        <div className="hero-grid">
          {/* Left: text */}
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-tag">Available for opportunities</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display" style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, marginTop: "1rem", color: "var(--ink)" }}>
              {personal.name.split(" ")[0]}{" "}
              <span className="gradient-text">{personal.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="hero-role-row" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.85rem" }}>
              <div style={{ width: 40, height: 2, background: "var(--yellow)", flexShrink: 0 }} />
              <span className="font-mono" style={{ fontSize: "clamp(0.7rem, 2vw, 0.9rem)", color: "var(--ink-muted)", letterSpacing: "0.1em" }}>{personal.title}</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              style={{ marginTop: "1.25rem", lineHeight: 1.7, color: "var(--ink-muted)", fontSize: "clamp(0.9rem, 2vw, 1.05rem)", maxWidth: 520 }}>
              {personal.tagline} — building enterprise-grade products for{" "}
              <strong style={{ color: "var(--pista-deep)" }}>PayPal</strong>,{" "}
              <strong style={{ color: "var(--pista-deep)" }}>Citi</strong> and{" "}
              <strong style={{ color: "var(--pista-deep)" }}>Broadridge</strong>.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="hero-cta-row" style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href="#experience" onClick={(e) => { e.preventDefault(); document.querySelector("#experience").scrollIntoView({ behavior: "smooth" }); }}
                style={{ padding: "0.8rem 1.75rem", background: "var(--ink)", color: "var(--yellow)", borderRadius: 8, fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", letterSpacing: "0.08em", textDecoration: "none", display: "inline-block" }}>
                View Experience ↓
              </motion.a>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href={`mailto:${personal.email}`}
                style={{ padding: "0.8rem 1.75rem", background: "var(--cream)", color: "var(--ink)", borderRadius: 8, fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", letterSpacing: "0.08em", textDecoration: "none", border: "2px solid var(--pista-dark)", display: "inline-block" }}>
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Desktop stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="stats-row">
              {[{ num: "12+", label: "Years Exp." }, { num: "3+", label: "Global Clients" }, { num: "85%", label: "Test Coverage" }].map((s) => (
                <div key={s.label}>
                  <div className="font-display" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--pista-deep)" }}>{s.num}</div>
                  <div className="font-mono" style={{ fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--ink-light)", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Mobile stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="stats-row-mobile">
              {[{ num: "12+", label: "Years" }, { num: "3+", label: "Clients" }, { num: "85%", label: "Coverage" }].map((s, i) => (
                <div key={s.label} style={{ flex: 1, textAlign: "center", borderRight: i < 2 ? "1px solid var(--pista-light)" : "none" }}>
                  <div className="font-display" style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--pista-deep)" }}>{s.num}</div>
                  <div className="font-mono" style={{ fontSize: "0.58rem", letterSpacing: "0.08em", color: "var(--ink-light)", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: desktop photo */}
          <div className="hero-photo-desktop">
            <motion.div initial={{ opacity: 0, scale: 0.85, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <motion.div animate={{ y: [0,-12,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: 12, left: 12, width: 280, height: 340, borderRadius: 24, background: "var(--yellow)", zIndex: 0 }} />
                <div style={{ position: "absolute", top: -8, left: -8, width: 280, height: 340, borderRadius: 24, background: "var(--pista)", zIndex: 0 }} />
                <div style={{ position: "relative", zIndex: 1, width: 280, height: 340, borderRadius: 24, overflow: "hidden", border: "3px solid var(--white)", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
                  <img src="/ankita.png" alt="Ankita Parasrampuria" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top, rgba(200,230,160,0.3), transparent)" }} />
                </div>
                <motion.div animate={{ rotate: [0,3,-3,0] }} transition={{ duration: 4, repeat: Infinity }}
                  style={{ position: "absolute", top: -16, right: -20, zIndex: 2, background: "var(--yellow)", borderRadius: 999, padding: "0.4rem 0.9rem", border: "2px solid var(--yellow-dark)", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}>
                  <span className="font-mono" style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--ink)" }}>12+ yrs ⚡</span>
                </motion.div>
                <motion.div animate={{ rotate: [0,-2,2,0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  style={{ position: "absolute", bottom: -16, left: -20, zIndex: 2, background: "var(--white)", borderRadius: 12, padding: "0.5rem 0.9rem", border: "2px solid var(--pista-dark)", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4caf50" }} />
                  <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--ink)" }}>Chennai, India</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0,8,0] }} transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)" }}>
        <div style={{ width: 24, height: 38, border: "2px solid var(--pista-dark)", borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6 }}>
          <div style={{ width: 4, height: 8, background: "var(--pista-deep)", borderRadius: 2 }} />
        </div>
      </motion.div>
    </section>
  );
}
