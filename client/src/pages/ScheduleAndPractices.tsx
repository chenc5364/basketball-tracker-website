/*
  Schedule & Practices page - Merged view with tabs for Games and Practices
*/
import { useState } from "react";
import { MapPin, Clock, Calendar, AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { GAMES, PRACTICE_SCHEDULE, type Game } from "@/lib/data";

const OUR_TEAM = "Connor / Eliot / Nathan";

function getResultBadge(game: Game) {
  if (game.isPlayoff) {
    return <span className="badge-playoff">Playoffs</span>;
  }
  if (game.result === "upcoming") {
    return <span className="badge-upcoming">Upcoming</span>;
  }
  if (game.result === "W") return <span className="badge-win">Win</span>;
  if (game.result === "L") return <span className="badge-loss">Loss</span>;
  return null;
}

function GameCard({ game }: { game: Game }) {
  const isHome = game.home === OUR_TEAM;

  return (
    <div
      className="game-card rounded-sm p-4 border-l-[oklch(0.68_0.19_42)]"
      style={{ borderLeftColor: "oklch(0.68 0.19 42)" }}
    >
      {/* Top row: date, time, pool, badge */}
      <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[oklch(0.55_0.01_265)]">
            <Calendar className="w-3.5 h-3.5" />
            <span
              className="text-xs font-semibold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
            >
              {game.date}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[oklch(0.55_0.01_265)]">
            <Clock className="w-3.5 h-3.5" />
            <span
              className="text-xs font-semibold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
            >
              {game.time}
            </span>
          </div>
          <span
            className="text-xs text-[oklch(0.45_0.01_265)]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}
          >
            {game.pool}
          </span>
        </div>
        <div>{getResultBadge(game)}</div>
      </div>

      {/* Teams */}
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-[oklch(0.45_0.01_265)] text-xs uppercase tracking-wider"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
            >
              Home
            </span>
            {isHome && (
              <span className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                ← US
              </span>
            )}
          </div>
          <div
            className={`font-bold truncate ${isHome ? "text-[oklch(0.68_0.19_42)]" : "text-white"}`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.02em", textTransform: "uppercase" }}
          >
            {game.home}
          </div>
          {game.homeScore !== undefined && (
            <div
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {game.homeScore}
            </div>
          )}
        </div>

        <div
          className="text-[oklch(0.45_0.01_265)] font-bold text-lg"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          VS
        </div>

        <div className="flex-1 min-w-0 text-right">
          <div className="flex items-center gap-2 justify-end mb-1">
            {game.away === OUR_TEAM && (
              <span className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                US →
              </span>
            )}
            <span
              className="text-[oklch(0.45_0.01_265)] text-xs uppercase tracking-wider"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
            >
              Away
            </span>
          </div>
          <div
            className={`font-bold truncate ${game.away === OUR_TEAM ? "text-[oklch(0.68_0.19_42)]" : "text-white"}`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.02em", textTransform: "uppercase" }}
          >
            {game.away}
          </div>
          {game.awayScore !== undefined && (
            <div
              className="text-2xl font-bold text-white text-right"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {game.awayScore}
            </div>
          )}
        </div>
      </div>

      {/* Location */}
      <div className="mt-3 pt-3 border-t border-[oklch(0.22_0.008_265)] flex items-center gap-1.5 text-[oklch(0.45_0.01_265)]">
        <MapPin className="w-3 h-3 flex-shrink-0" />
        <span className="text-xs truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {game.location} — {game.court}
        </span>
      </div>
    </div>
  );
}

function PracticeCard({ session }: { session: (typeof PRACTICE_SCHEDULE)[0] }) {
  return (
    <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] rounded-sm p-4 hover:border-[oklch(0.68_0.19_42/0.4)] transition-colors duration-200">
      {/* Day and time */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <div
            className="text-white font-bold text-lg"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.03em" }}
          >
            {session.day}
          </div>
          {session.date && (
            <div className="text-[oklch(0.55_0.01_265)] text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {session.date}
            </div>
          )}
        </div>
      </div>

      {/* Time */}
      <div className="flex items-center gap-2 mb-3 text-[oklch(0.55_0.01_265)]">
        <Clock className="w-4 h-4" />
        <span
          className="text-sm font-semibold"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
        >
          {session.time}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-start gap-2 text-[oklch(0.55_0.01_265)]">
        <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <div className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <div className="font-semibold">{session.location}</div>
          <div className="text-xs text-[oklch(0.45_0.01_265)] mt-1">{session.address}</div>
        </div>
      </div>

      {/* Notes */}
      {session.notes && (
        <div className="mt-3 pt-3 border-t border-[oklch(0.22_0.008_265)]">
          <p className="text-[oklch(0.55_0.01_265)] text-xs italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {session.notes}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ScheduleAndPractices() {
  const [activeTab, setActiveTab] = useState<"games" | "practices">("games");

  // Get only our team's games
  const ourGames = GAMES.filter((g) => g.home === OUR_TEAM || g.away === OUR_TEAM);

  // Separate regular season and playoffs
  const regularGames = ourGames.filter((g) => !g.isPlayoff);
  const playoffGames = ourGames.filter((g) => g.isPlayoff);

  const hasPractices = PRACTICE_SCHEDULE.length > 0 && PRACTICE_SCHEDULE[0].day !== "TBD";

  return (
    <PageLayout title="Schedule & Practices" subtitle="Connor / Eliot / Nathan">
      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-[oklch(0.22_0.008_265)]">
        <button
          onClick={() => setActiveTab("games")}
          className={`px-4 py-3 font-bold uppercase text-sm transition-colors duration-200 border-b-2 ${
            activeTab === "games"
              ? "text-[oklch(0.68_0.19_42)] border-[oklch(0.68_0.19_42)]"
              : "text-[oklch(0.45_0.01_265)] border-transparent hover:text-white"
          }`}
          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
        >
          Game Schedule
        </button>
        <button
          onClick={() => setActiveTab("practices")}
          className={`px-4 py-3 font-bold uppercase text-sm transition-colors duration-200 border-b-2 ${
            activeTab === "practices"
              ? "text-[oklch(0.68_0.19_42)] border-[oklch(0.68_0.19_42)]"
              : "text-[oklch(0.45_0.01_265)] border-transparent hover:text-white"
          }`}
          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
        >
          Practice Schedule
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "games" ? (
        <div className="space-y-8">
          {/* Regular Season */}
          {regularGames.length > 0 && (
            <div>
              <div
                className="text-[oklch(0.55_0.01_265)] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Regular Season
                <div className="flex-1 h-px bg-[oklch(0.22_0.008_265)]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {regularGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          )}

          {/* Playoffs */}
          {playoffGames.length > 0 && (
            <div>
              <div
                className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Playoffs
                <div className="flex-1 h-px bg-[oklch(0.28_0.008_265)]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {playoffGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
          )}

          {/* MasterSports link */}
          <div className="mt-8 text-center">
            <a
              href="https://www.mastersports.com/leagues/carmel-valley-summer-2026-spring-basketball-league/divisions/1089/teams/3907/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[oklch(0.68_0.19_42)] text-sm font-bold uppercase tracking-wider hover:underline"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em" }}
            >
              View Full League Schedule on MasterSports →
            </a>
          </div>
        </div>
      ) : (
        /* Practices Tab */
        <div>
          {!hasPractices ? (
            <div className="bg-[oklch(0.17_0.008_265)] border border-[oklch(0.28_0.008_265)] border-l-4 rounded-sm p-6" style={{ borderLeftColor: "oklch(0.68 0.19 42)" }}>
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
                    Practice days, times, and locations will be updated once confirmed by the coach.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRACTICE_SCHEDULE.map((session) => (
                <PracticeCard key={session.id} session={session} />
              ))}
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
}
