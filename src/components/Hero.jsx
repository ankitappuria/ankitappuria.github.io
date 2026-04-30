import { motion } from "framer-motion";
import { personal } from "../data/resume";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--cream)",
        paddingTop: "6rem",
      }}
    >
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "10%", right: "-5%",
          width: 500, height: 500,
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          background: "var(--pista)", opacity: 0.35, filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "5%", left: "-10%",
          width: 400, height: 400,
          borderRadius: "40% 60% 30% 70% / 60% 40% 50% 50%",
          background: "var(--yellow)", opacity: 0.25, filter: "blur(70px)",
        }}
      />

      {/* Decorative grid dots */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: "radial-gradient(var(--pista-deep) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center" }}>
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, lineHeight: 1.1, marginTop: "1.2rem", color: "var(--ink)" }}
            >
              {personal.name.split(" ")[0]}{" "}
              <span className="gradient-text">{personal.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}
            >
              <div style={{ width: 48, height: 2, background: "var(--yellow)" }} />
              <span className="font-mono" style={{ fontSize: "0.9rem", color: "var(--ink-muted)", letterSpacing: "0.1em" }}>
                {personal.title}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ marginTop: "1.5rem", maxWidth: 540, lineHeight: 1.7, color: "var(--ink-muted)", fontSize: "1.05rem" }}
            >
              {personal.tagline} — building enterprise-grade products for{" "}
              <strong style={{ color: "var(--pista-deep)" }}>PayPal</strong>,{" "}
              <strong style={{ color: "var(--pista-deep)" }}>Citi</strong> and{" "}
              <strong style={{ color: "var(--pista-deep)" }}>Broadridge</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#experience"
                onClick={(e) => { e.preventDefault(); document.querySelector("#experience").scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  padding: "0.85rem 2rem", background: "var(--ink)", color: "var(--yellow)",
                  borderRadius: 8, fontFamily: "'Space Mono', monospace", fontSize: "0.8rem",
                  letterSpacing: "0.1em", textDecoration: "none", border: "none", cursor: "pointer",
                  display: "inline-block",
                }}
              >
                View Experience ↓
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, background: "var(--pista)" }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${personal.email}`}
                style={{
                  padding: "0.85rem 2rem", background: "var(--cream)", color: "var(--ink)",
                  borderRadius: 8, fontFamily: "'Space Mono', monospace", fontSize: "0.8rem",
                  letterSpacing: "0.1em", textDecoration: "none",
                  border: "2px solid var(--pista-dark)", display: "inline-block",
                  transition: "background 0.2s ease",
                }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ display: "flex", gap: "2.5rem", marginTop: "3rem" }}
            >
              {[
                { num: "12+", label: "Years Exp." },
                { num: "3+", label: "Global Clients" },
                { num: "85%", label: "Test Coverage" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display" style={{ fontSize: "2rem", fontWeight: 900, color: "var(--pista-deep)" }}>{stat.num}</div>
                  <div className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--ink-light)", textTransform: "uppercase" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ flexShrink: 0 }}
          >
            {/* Floating card with photo */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative" }}
            >
              {/* Yellow offset shadow */}
              <div style={{
                position: "absolute", top: 12, left: 12,
                width: 280, height: 340,
                borderRadius: 24,
                background: "var(--yellow)",
                zIndex: 0,
              }} />
              {/* Pista offset shadow */}
              <div style={{
                position: "absolute", top: -8, left: -8,
                width: 280, height: 340,
                borderRadius: 24,
                background: "var(--pista)",
                zIndex: 0,
              }} />

              {/* Photo frame */}
              <div style={{
                position: "relative", zIndex: 1,
                width: 280, height: 340,
                borderRadius: 24,
                overflow: "hidden",
                border: "3px solid var(--white)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}>
                <img
                  src="/ankita.png"
                  alt="Ankita Parasrampuria"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                {/* Subtle gradient overlay at bottom */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 80,
                  background: "linear-gradient(to top, rgba(200,230,160,0.3), transparent)",
                }} />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", top: -16, right: -20, zIndex: 2,
                  background: "var(--yellow)", borderRadius: 999,
                  padding: "0.4rem 0.9rem",
                  border: "2px solid var(--yellow-dark)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                }}
              >
                <span className="font-mono" style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--ink)", letterSpacing: "0.05em" }}>
                  12+ yrs ⚡
                </span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  position: "absolute", bottom: -16, left: -20, zIndex: 2,
                  background: "var(--white)", borderRadius: 12,
                  padding: "0.5rem 0.9rem",
                  border: "2px solid var(--pista-dark)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                  display: "flex", alignItems: "center", gap: "0.5rem",
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4caf50" }} />
                <span className="font-mono" style={{ fontSize: "0.65rem", color: "var(--ink)", letterSpacing: "0.05em" }}>
                  Chennai, India
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)" }}
      >
        <div style={{ width: 24, height: 38, border: "2px solid var(--pista-dark)", borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6 }}>
          <div style={{ width: 4, height: 8, background: "var(--pista-deep)", borderRadius: 2 }} />
        </div>
      </motion.div>
    </section>
  );
}
