/*
  Standings page - Division standings table
*/
import { Trophy } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { STANDINGS } from "@/lib/data";

export default function StandingsPage() {
  return (
    <PageLayout title="Standings" subtitle="Division Rankings">
      <div className="space-y-6">
        {/* Standings table */}
        <div className="overflow-x-auto rounded-sm border border-[oklch(0.28_0.008_265)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[oklch(0.20_0.008_265)] border-b border-[oklch(0.28_0.008_265)]">
                {["Seed", "Team", "W", "L", "T", "PD", "PS", "PA"].map((col) => (
                  <th
                    key={col}
                    className={`px-4 py-3 text-[oklch(0.55_0.01_265)] font-bold uppercase tracking-wider text-xs ${
                      col === "Team" ? "text-left" : "text-center"
                    }`}
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STANDINGS.map((row: any, idx: number) => (
                <tr
                  key={row.seed}
                  className={`border-b border-[oklch(0.22_0.008_265)] transition-colors duration-150 ${
                    row.isOurTeam
                      ? "bg-[oklch(0.22_0.015_42/0.3)]"
                      : idx % 2 === 0
                      ? "bg-[oklch(0.17_0.008_265)]"
                      : "bg-[oklch(0.15_0.008_265)]"
                  } hover:bg-[oklch(0.20_0.008_265)]`}
                  style={row.isOurTeam ? { borderLeft: "3px solid oklch(0.68 0.19 42)" } : {}}
                >
                  {/* Seed */}
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center">
                      {row.seed === 1 ? (
                        <Trophy className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <span
                          className={`font-bold ${row.isOurTeam ? "text-[oklch(0.68_0.19_42)]" : "text-[oklch(0.55_0.01_265)]"}`}
                          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
                        >
                          {row.seed}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Team name */}
                  <td className="px-4 py-3 text-left">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-bold ${row.isOurTeam ? "text-[oklch(0.68_0.19_42)]" : "text-white"}`}
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.02em" }}
                      >
                        {row.team}
                      </span>
                      {row.isOurTeam && (
                        <span
                          className="text-xs px-2 py-0.5 bg-[oklch(0.68_0.19_42/0.2)] text-[oklch(0.68_0.19_42)] rounded-sm font-bold uppercase"
                          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
                        >
                          Our Team
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Stats */}
                  {[row.w, row.l, row.t, row.pd, row.ps, row.pa].map((val, i) => {
                    // Determine if this is the PD column (index 3)
                    const isPDColumn = i === 3;
                    const isPositive = isPDColumn && val > 0;
                    const isNegative = isPDColumn && val < 0;
                    
                    // Format PD with + or - prefix
                    const displayVal = isPDColumn ? (val > 0 ? `+${val}` : `${val}`) : val;
                    
                    // Determine color for PD
                    let pdColor = "text-[oklch(0.65_0.01_265)]";
                    if (isPDColumn) {
                      pdColor = isPositive ? "text-[oklch(0.45_0.15_130)]" : isNegative ? "text-[oklch(0.40_0.15_15)]" : "text-[oklch(0.65_0.01_265)]";
                    }
                    
                    return (
                      <td key={i} className="px-4 py-3 text-center">
                        <span
                          className={`font-bold ${isPDColumn ? pdColor : row.isOurTeam ? "text-[oklch(0.80_0.005_265)]" : "text-[oklch(0.65_0.01_265)]"}`}
                          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.95rem" }}
                        >
                          {displayVal}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Column legend */}
        <div className="flex flex-wrap gap-4 text-xs text-[oklch(0.45_0.01_265)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span><strong className="text-[oklch(0.55_0.01_265)]">W</strong> = Wins</span>
          <span><strong className="text-[oklch(0.55_0.01_265)]">L</strong> = Losses</span>
          <span><strong className="text-[oklch(0.55_0.01_265)]">T</strong> = Ties</span>
          <span><strong className="text-[oklch(0.55_0.01_265)]">PD</strong> = Point Differential</span>
          <span><strong className="text-[oklch(0.55_0.01_265)]">PS</strong> = Points Scored</span>
          <span><strong className="text-[oklch(0.55_0.01_265)]">PA</strong> = Points Against</span>
        </div>

        {/* Note: season hasn't started */}
        <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm p-4">
          <p className="text-[oklch(0.55_0.01_265)] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <strong className="text-[oklch(0.68_0.19_42)]">Note:</strong> The season begins March 21, 2026. Standings will update as games are played.
            Live standings are also available on{" "}
            <a
              href="https://www.mastersports.com/leagues/carmel-valley-summer-2026-spring-basketball-league/divisions/1089/teams/3907/standings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.68_0.19_42)] hover:underline"
            >
              MasterSports
            </a>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
