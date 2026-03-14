/*
  Design: Professional Modern / Teal Theme
  Light background nav with teal accent, Barlow Condensed font
  Multi-page navigation
*/
import { useState } from "react";
import * as React from "react";
import { Menu, X, Trophy } from "lucide-react";
import { useLocation } from "wouter";

const NAV_LINKS = [
  { label: "Schedule", href: "/schedule" },
  { label: "Overview", href: "/overview" },
  { label: "Standings", href: "/standings" },
  { label: "Roster", href: "/roster" },
  { label: "Videos", href: "/videos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  // Determine active page - Schedule is now the default
  const isScheduleDefault = location === "/";

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.97_0.002_265/0.95)] backdrop-blur-md shadow-lg border-b border-[oklch(0.90_0.002_265)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-[oklch(0.52_0.16_180)] flex items-center justify-center shadow-lg">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <div
                className="text-[oklch(0.20_0.008_265)] font-bold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                Connor / Eliot / Nathan
              </div>
              <div className="text-[oklch(0.50_0.01_265)] text-xs leading-none mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                CV Spring 2026 · 3rd–4th Boys
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href || (isScheduleDefault && link.href === "/schedule");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[oklch(0.20_0.008_265)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[oklch(0.98_0.001_265)] border-t border-[oklch(0.90_0.002_265)] px-4 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href || (isScheduleDefault && link.href === "/schedule");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`text-left px-3 py-2 rounded text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-[oklch(0.52_0.16_180)] bg-[oklch(0.90_0.002_265)]"
                      : "text-[oklch(0.50_0.01_265)] hover:text-[oklch(0.52_0.16_180)]"
                  }`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
