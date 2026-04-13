/*
  Design: Urban Athletic / Sports Editorial
  Roster section with player cards, placeholder state for user-provided data
*/
import { User, AlertCircle } from "lucide-react";
import { ROSTER } from "@/lib/data";

const BASKETBALL_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663436047923/KyCgDSb4mcg4qtRETmWrCn/basketball-texture-Uu3DqFfktYhSLS69pNUgcS.webp";

export default function RosterSection() {
  const hasRealRoster = ROSTER.length > 0 && ROSTER[0].name !== "Player roster to be provided by coach";

  return (
    <section id="roster" className="py-20 bg-[oklch(0.13_0.008_265)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div
            className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase tracking-widest mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Team Members
          </div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            Roster
          </h2>
          <div className="mt-3 w-16 h-1 bg-[oklch(0.68_0.19_42)]" />
        </div>

        {!hasRealRoster ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Placeholder notice */}
            <div>
              <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] border-l-4 rounded-sm p-6 mb-6" style={{ borderLeftColor: "oklch(0.68 0.19 42)" }}>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[oklch(0.68_0.19_42)] flex-shrink-0 mt-0.5" />
                  <div>
                    <div
                      className="text-white font-bold mb-2"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                    >
                      Roster Coming Soon
                    </div>
                    <p className="text-[oklch(0.65_0.01_265)] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      The player roster will be updated once provided. Teams are formed via a draft process after the skills assessment.
                    </p>
                  </div>
                </div>
              </div>

              {/* All teams in division */}
              <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm p-6">
                <div
                  className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  All Teams in Division
                </div>
                <div className="space-y-2">
                  {[
                    "Catherine Hancock",
                    "Luke Franey / Naveen Krishnamoorthy",
                    "Marcus Lee / Derick Chi",
                    "Kolt Sakofsky / Grant Clabo",
                    "James McNally",
                    "Jon Ramba",
                    "Connor Chen / Nathan Chang / Eliot D'Argenio",
                    "Sam Hangafarin",
                  ].map((team, i) => (
                    <div
                      key={team}
                      className={`flex items-center gap-3 py-2 px-3 rounded-sm ${
                        team.includes("James McNally")
                          ? "bg-[oklch(0.22_0.015_42/0.3)] border border-[oklch(0.68_0.19_42/0.3)]"
                          : "hover:bg-[oklch(0.20_0.008_265)]"
                      } transition-colors duration-150`}
                    >
                      <span
                        className="text-[oklch(0.45_0.01_265)] font-bold text-sm w-5 text-center"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`font-semibold text-sm ${team.includes("James McNally") ? "text-[oklch(0.68_0.19_42)]" : "text-white"}`}
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.03em" }}
                      >
                        {team}
                      </span>
                      {team.includes("James McNally") && (
                        <span
                          className="ml-auto text-xs px-2 py-0.5 bg-[oklch(0.68_0.19_42/0.2)] text-[oklch(0.68_0.19_42)] rounded-sm font-bold uppercase"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                        >
                          Our Team
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Basketball texture image */}
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="rounded-sm overflow-hidden border border-[oklch(0.28_0.008_265)] w-full"
                style={{ aspectRatio: "1/1", maxWidth: "400px" }}
              >
                <img
                  src={BASKETBALL_TEXTURE}
                  alt="Basketball"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </div>
          </div>
        ) : (
          /* Real roster */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {ROSTER.map((player, idx) => (
              <div
                key={idx}
                className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm p-4 text-center hover:border-[oklch(0.68_0.19_42/0.4)] transition-colors duration-200"
              >
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-[oklch(0.22_0.008_265)] flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-[oklch(0.45_0.01_265)]" />
                </div>

                <div
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.03em" }}
                >
                  {player.name}
                </div>


              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
