import { motion } from "framer-motion";
import { personal } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ padding: "6rem 0", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-30%", right: "-10%", width: "clamp(200px,40vw,500px)", height: "clamp(200px,40vw,500px)", borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%", background: "var(--pista)", opacity: 0.08, filter: "blur(80px)" }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "clamp(180px,35vw,400px)", height: "clamp(180px,35vw,400px)", borderRadius: "40% 60% 30% 70%", background: "var(--yellow)", opacity: 0.1, filter: "blur(70px)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(var(--pista) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 580, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-tag" style={{ color: "var(--pista)", borderColor: "var(--pista-dark)" }}>Contact</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.2rem)", fontWeight: 900, color: "var(--cream)", marginTop: "1rem", lineHeight: 1.15 }}>
            Let's Build Something <span style={{ color: "var(--yellow)" }}>Extraordinary</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ color: "rgba(253,253,245,0.6)", marginTop: "1rem", lineHeight: 1.7, fontSize: "clamp(0.88rem, 2vw, 1rem)" }}>
            Whether you're looking to scale your engineering org, architect a new product, or need a senior contributor — I'd love to connect.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginTop: "2.5rem" }}>
            {[
              { icon: "✉️", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: "📱", label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/ankitap", href: personal.linkedin },
              { icon: "🐙", label: "GitHub", value: "github.com/ankitap", href: personal.github },
            ].map((item, i) => (
              <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.07 }}
                whileHover={{ x: 4, background: "rgba(200,230,160,0.12)" }}
                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.9rem 1.25rem", borderRadius: 10, border: "1px solid rgba(200,230,160,0.2)", textDecoration: "none", color: "var(--cream)", transition: "all 0.2s ease" }}>
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{item.icon}</span>
                <div style={{ textAlign: "left", flex: 1, overflow: "hidden" }}>
                  <div className="font-mono" style={{ fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--pista)", textTransform: "uppercase" }}>{item.label}</div>
                  <div style={{ fontSize: "clamp(0.8rem, 2vw, 0.95rem)", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.value}</div>
                </div>
                <span style={{ color: "var(--pista)", opacity: 0.7, flexShrink: 0 }}>→</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.a href={`mailto:${personal.email}`} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ display: "inline-block", marginTop: "2rem", padding: "0.9rem 2.25rem", background: "var(--yellow)", color: "var(--ink)", borderRadius: 8, fontFamily: "'Space Mono', monospace", fontSize: "0.85rem", letterSpacing: "0.1em", fontWeight: 700, textDecoration: "none" }}>
            Say Hello 👋
          </motion.a>
        </div>
      </div>

      <div style={{ marginTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", textAlign: "center" }}>
        <p className="font-mono" style={{ fontSize: "0.62rem", color: "rgba(253,253,245,0.3)", letterSpacing: "0.1em" }}>© 2025 ANKITA PARASRAMPURIA · BUILT WITH REACT + VITE</p>
      </div>
    </section>
  );
}
