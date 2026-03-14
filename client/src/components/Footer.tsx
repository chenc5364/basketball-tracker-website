/*
  Design: Urban Athletic / Sports Editorial
  Dark footer with orange accents
*/
import { Trophy, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.11_0.008_265)] border-t border-[oklch(0.22_0.008_265)] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[oklch(0.68_0.19_42)] flex items-center justify-center">
              <Trophy className="w-5 h-5 text-[oklch(0.13_0.008_265)]" />
            </div>
            <div>
              <div
                className="text-white font-bold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                Connor Chen
              </div>
              <div className="text-[oklch(0.45_0.01_265)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Carmel Valley Spring 2026 · 3rd–4th Boys
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://www.mastersports.com/leagues/carmel-valley-summer-2026-spring-basketball-league/divisions/1089/teams/3907"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[oklch(0.55_0.01_265)] hover:text-[oklch(0.68_0.19_42)] text-xs font-semibold uppercase tracking-wider transition-colors duration-150"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
            >
              MasterSports <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="mailto:Ryan@MasterSports.com"
              className="text-[oklch(0.55_0.01_265)] hover:text-[oklch(0.68_0.19_42)] text-xs font-semibold uppercase tracking-wider transition-colors duration-150"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
            >
              Contact League
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[oklch(0.35_0.008_265)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © 2026 Carmel Valley Basketball Tracker
          </div>
        </div>
      </div>
    </footer>
  );
}
