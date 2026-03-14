/*
  Design: Urban Athletic / Sports Editorial
  Dark charcoal nav with orange accent, Barlow Condensed font
  Sticky top nav with blur backdrop on scroll
*/
import { useState, useEffect } from "react";
import { Menu, X, Trophy } from "lucide-react";

const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Schedule", href: "#schedule" },
  { label: "Practices", href: "#practices" },
  { label: "Standings", href: "#standings" },
  { label: "Roster", href: "#roster" },
  { label: "Videos", href: "#videos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.13_0.008_265/0.95)] backdrop-blur-md shadow-2xl border-b border-[oklch(0.28_0.008_265)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[oklch(0.68_0.19_42)] flex items-center justify-center shadow-lg">
              <Trophy className="w-5 h-5 text-[oklch(0.13_0.008_265)]" />
            </div>
            <div>
              <div
                className="text-white font-bold leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                James McNally
              </div>
              <div className="text-[oklch(0.55_0.01_265)] text-xs leading-none mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                CV Spring 2026 · 3rd–4th Boys
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[oklch(0.15_0.008_265)] border-t border-[oklch(0.28_0.008_265)] px-4 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-3 py-2 rounded text-sm font-semibold uppercase tracking-wider transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[oklch(0.68_0.19_42)] bg-[oklch(0.20_0.008_265)]"
                    : "text-[oklch(0.65_0.01_265)] hover:text-white"
                }`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
