/*
  Practices page - Practice schedule
*/
import { Clock, MapPin, Calendar, AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { PRACTICES } from "@/lib/data";

export default function Practices() {
  const hasRealData = PRACTICES.length > 0;

  return (
    <PageLayout title="Practice Schedule" subtitle="Weekly Training">
      {!hasRealData ? (
        /* Placeholder state */
        <div className="max-w-2xl">
          <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] border-l-4 rounded-sm p-6 mb-6" style={{ borderLeftColor: "oklch(0.68 0.19 42)" }}>
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
          {PRACTICES.map((practice) => (
            <div
              key={practice.id}
              className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] border-l-4 rounded-sm p-5 hover:border-[oklch(0.68_0.19_42/0.4)] transition-colors duration-200"
              style={{ borderLeftColor: "oklch(0.68 0.19 42)" }}
            >
              <div
                className="text-[oklch(0.68_0.19_42)] font-bold mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                {practice.date}
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

                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
