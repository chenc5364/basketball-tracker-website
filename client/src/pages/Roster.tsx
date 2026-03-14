/*
  Roster page - Team roster
*/
import { User, AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { ROSTER } from "@/lib/data";

const BASKETBALL_TEXTURE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663436047923/KyCgDSb4mcg4qtRETmWrCn/basketball-texture-Uu3DqFfktYhSLS69pNUgcS.webp";

export default function RosterPage() {
  const hasRealRoster = ROSTER.length > 0 && ROSTER[0].name !== "Player roster to be provided by coach";

  return (
    <PageLayout title="Roster" subtitle="Team Members">
      {!hasRealRoster ? (
        <div className="bg-oklch(1_0_0) border border-[oklch(0.90_0.002_265)] border-l-4 rounded-sm p-6" style={{ borderLeftColor: "oklch(0.52 0.16 180)" }}>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[oklch(0.52_0.16_180)] flex-shrink-0 mt-0.5" />
            <div>
              <div
                className="text-[oklch(0.20_0.008_265)] font-bold mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                Roster Coming Soon
              </div>
              <p className="text-[oklch(0.50_0.01_265)] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                The player roster will be updated once provided. Teams are formed via a draft process after the skills assessment.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Real roster */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {ROSTER.map((player, idx) => (
            <div
              key={idx}
              className="bg-oklch(1_0_0) border border-[oklch(0.90_0.002_265)] rounded-sm p-4 text-center hover:border-[oklch(0.52_0.16_180/0.4)] transition-colors duration-200"
            >
              {/* Jersey number */}
              {player.number && (
                <div
                  className="text-[oklch(0.52_0.16_180)] font-bold mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2rem", lineHeight: 1 }}
                >
                  #{player.number}
                </div>
              )}

              {/* Avatar placeholder */}
              {!player.number && (
                <div className="w-12 h-12 rounded-full bg-[oklch(0.90_0.002_265)] flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-[oklch(0.50_0.01_265)]" />
                </div>
              )}

              <div
                className="text-[oklch(0.20_0.008_265)] font-bold text-sm"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.03em" }}
              >
                {player.name}
              </div>
              {player.grade && (
                <div className="text-[oklch(0.50_0.01_265)] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {player.grade}
                </div>
              )}
              {player.position && (
                <div
                  className="text-[oklch(0.52_0.16_180)] text-xs mt-1 font-bold uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                >
                  {player.position}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
