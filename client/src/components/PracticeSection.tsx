/*
  Design: Urban Athletic / Sports Editorial
  Practice schedule section with placeholder state for user-provided data
*/
import { Clock, MapPin, Calendar, AlertCircle } from "lucide-react";
import { PRACTICE_SCHEDULE } from "@/lib/data";

export default function PracticeSection() {
  const hasRealData = PRACTICE_SCHEDULE.length > 0 && PRACTICE_SCHEDULE[0].day !== "TBD";

  return (
    <section id="practices" className="py-20 bg-[oklch(0.13_0.008_265)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div
            className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase tracking-widest mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Weekly Training
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
            Practice Schedule
          </h2>
          <div className="mt-3 w-16 h-1 bg-[oklch(0.68_0.19_42)]" />
        </div>

        {!hasRealData ? (
          /* Placeholder state */
          <div className="max-w-2xl">
            <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] border-l-4 border-l-[oklch(0.68_0.19_42)] rounded-sm p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[oklch(0.68_0.19_42)] flex-shrink-0 mt-0.5" />
                <div>
                  <div
                    className="text-white font-bold mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                  >
                    Practice Schedule Coming Soon
                  </div>
                  <p className="text-[oklch(0.65_0.01_265)] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    The practice schedule, location, and time will be updated once provided by the coach.
                    Practice days/times are determined by the team coach after the draft.
                  </p>
                </div>
              </div>
            </div>

            {/* General practice info from league */}
            <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm p-6">
              <div
                className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                League Practice Guidelines
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[oklch(0.55_0.01_265)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Typical Practice Times</div>
                    <p className="text-[oklch(0.60_0.01_265)] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Late afternoons to early evenings on weekdays (exact time set by coach)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[oklch(0.55_0.01_265)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Practice Locations</div>
                    <p className="text-[oklch(0.60_0.01_265)] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Carmel Valley Recreation Center (3777 Townsgate Drive) or another nearby outdoor location chosen by the coach
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[oklch(0.55_0.01_265)] flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Schedule Policy</div>
                    <p className="text-[oklch(0.60_0.01_265)] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Players cannot be moved to different teams due to practice schedule conflicts. The coach sets the weekly practice schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Real practice data */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRACTICE_SCHEDULE.map((practice) => (
              <div
                key={practice.id}
                className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] border-l-4 rounded-sm p-5 hover:border-[oklch(0.68_0.19_42/0.4)] transition-colors duration-200"
                style={{ borderLeftColor: "oklch(0.68 0.19 42)" }}
              >
                <div
                  className="text-[oklch(0.68_0.19_42)] font-bold mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
                >
                  {practice.day}
                  {practice.date && (
                    <span className="text-[oklch(0.55_0.01_265)] text-sm ml-2 font-normal">
                      {practice.date}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[oklch(0.78_0.005_265)]">
                    <Clock className="w-4 h-4 text-[oklch(0.55_0.01_265)]" />
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {practice.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-[oklch(0.78_0.005_265)]">
                    <MapPin className="w-4 h-4 text-[oklch(0.55_0.01_265)] flex-shrink-0 mt-0.5" />
                    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      <div className="text-sm font-semibold text-white">{practice.location}</div>
                      <div className="text-xs text-[oklch(0.55_0.01_265)]">{practice.address}</div>
                    </div>
                  </div>
                  {practice.notes && (
                    <p className="text-[oklch(0.55_0.01_265)] text-xs mt-2 pt-2 border-t border-[oklch(0.22_0.008_265)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {practice.notes}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
