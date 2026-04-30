import { motion } from "framer-motion";
import { personal } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 0", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-30%", right: "-10%",
        width: 500, height: 500,
        borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
        background: "var(--pista)", opacity: 0.08, filter: "blur(80px)",
      }} />
      <div style={{
        position: "absolute", bottom: "-20%", left: "-10%",
        width: 400, height: 400,
        borderRadius: "40% 60% 30% 70% / 60% 40% 50% 50%",
        background: "var(--yellow)", opacity: 0.1, filter: "blur(70px)",
      }} />
      {/* Grid dots */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "radial-gradient(var(--pista) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="section-tag"
              style={{ color: "var(--pista)", borderColor: "var(--pista-dark)" }}
            >
              Contact
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900,
              color: "var(--cream)", marginTop: "1rem", lineHeight: 1.15,
            }}
          >
            Let's Build Something{" "}
            <span style={{ color: "var(--yellow)" }}>Extraordinary</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "rgba(253,253,245,0.6)", marginTop: "1rem", lineHeight: 1.7 }}
          >
            Whether you're looking to scale your engineering org, architect a new product, or need a senior contributor who cares deeply about code quality — I'd love to connect.
          </motion.p>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "3rem" }}
          >
            {[
              { icon: "✉️", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: "📱", label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ankita-parasrampuria", href: personal.linkedin },
              { icon: "🐙", label: "GitHub", value: "github.com/ankitappuria", href: personal.github },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6, background: "rgba(200,230,160,0.15)" }}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem 1.5rem", borderRadius: 10,
                  border: "1px solid rgba(200,230,160,0.2)",
                  textDecoration: "none", color: "var(--cream)",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--pista)", textTransform: "uppercase" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.95rem", marginTop: 2 }}>{item.value}</div>
                </div>
                <span style={{ marginLeft: "auto", color: "var(--pista)", opacity: 0.7 }}>→</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Big CTA */}
          <motion.a
            href={`mailto:${personal.email}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-block", marginTop: "2.5rem",
              padding: "1rem 2.5rem",
              background: "var(--yellow)", color: "var(--ink)",
              borderRadius: 8, fontFamily: "'Space Mono', monospace",
              fontSize: "0.85rem", letterSpacing: "0.1em", fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Say Hello 👋
          </motion.a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "4rem", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", textAlign: "center" }}>
        <p className="font-mono" style={{ fontSize: "0.7rem", color: "rgba(253,253,245,0.3)", letterSpacing: "0.1em" }}>
          © 2025 ANKITA PARASRAMPURIA · BUILT WITH REACT + VITE
        </p>
      </div>
    </section>
  );
}
