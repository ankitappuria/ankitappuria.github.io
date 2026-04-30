import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data/resume";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(253,253,245,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--pista)" : "none",
        transition: "all 0.3s ease",
        padding: "1rem 0",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} style={{ cursor: "pointer" }} onClick={() => handleNav("#home")}>
          <span className="font-display" style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--ink)" }}>
            AP
          </span>
          <span style={{ color: "var(--yellow-dark)", fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", marginLeft: 6 }}>
            ◆
          </span>
        </motion.div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`nav-link ${active === item.href.replace("#", "") ? "active" : ""}`}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: active === item.href.replace("#", "") ? "var(--pista-deep)" : "var(--ink-muted)",
                padding: "0.25rem 0",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5 }}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={menuOpen ? (i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 9 } : { rotate: -45, y: -9 }) : { rotate: 0, y: 0, opacity: 1 }}
              style={{ display: "block", width: 22, height: 2, background: "var(--ink)", borderRadius: 2 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "var(--cream)", borderTop: "1px solid var(--pista)", overflow: "hidden" }}
          >
            <div style={{ padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="nav-link"
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--ink-muted)", textAlign: "left", padding: "0.25rem 0",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
