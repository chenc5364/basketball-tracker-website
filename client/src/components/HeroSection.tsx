/*
  Design: Urban Athletic / Sports Editorial
  Dark court hero with blazing orange text, large condensed typography
*/
import { MapPin, Calendar, Users } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663436047923/KyCgDSb4mcg4qtRETmWrCn/hero-bg-CAsRG6hrx79q9L8X8KL82F.webp";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-end pb-20 overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.008_265)] via-[oklch(0.10_0.008_265/0.7)] to-[oklch(0.10_0.008_265/0.2)]" />
      {/* Left-side dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.008_265/0.8)] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Season badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="text-xs font-bold uppercase tracking-widest text-[oklch(0.68_0.19_42)] border border-[oklch(0.68_0.19_42/0.4)] px-3 py-1 rounded-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Spring 2026 Season
            </span>
          </div>

          {/* Team name */}
          <h1
            className="text-white leading-none mb-2"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              textShadow: "0 4px 24px oklch(0 0 0 / 0.5)",
            }}
          >
            James McNally
          </h1>

          {/* League name */}
          <div
            className="text-[oklch(0.68_0.19_42)] mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Carmel Valley Spring 2026 Basketball League
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-[oklch(0.80_0.005_265)]">
              <Calendar className="w-4 h-4 text-[oklch(0.68_0.19_42)]" />
              <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Mar 21 – May 30, 2026
              </span>
            </div>
            <div className="flex items-center gap-2 text-[oklch(0.80_0.005_265)]">
              <MapPin className="w-4 h-4 text-[oklch(0.68_0.19_42)]" />
              <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Carmel Valley Rec Center & Ocean Air Park
              </span>
            </div>
            <div className="flex items-center gap-2 text-[oklch(0.80_0.005_265)]">
              <Users className="w-4 h-4 text-[oklch(0.68_0.19_42)]" />
              <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Grades 3–4 Boys
              </span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                const el = document.getElementById("schedule");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-[oklch(0.68_0.19_42)] text-[oklch(0.13_0.008_265)] font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-[oklch(0.72_0.20_42)] transition-all duration-200 hover:shadow-lg hover:shadow-[oklch(0.68_0.19_42/0.3)]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
            >
              View Schedule
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("standings");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 border border-white/30 text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:border-[oklch(0.68_0.19_42)] hover:text-[oklch(0.68_0.19_42)] transition-all duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
            >
              Standings
            </button>
          </div>
        </div>
      </div>

      {/* Bottom orange slash */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[oklch(0.68_0.19_42)] via-[oklch(0.58_0.16_42)] to-transparent" />
    </section>
  );
}
