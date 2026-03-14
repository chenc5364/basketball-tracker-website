/*
  Design: Urban Athletic / Sports Editorial
  Game schedule with game cards, orange left-border accent, win/loss/upcoming badges
*/
import { useState } from "react";
import { MapPin, Clock, Calendar } from "lucide-react";
import { GAMES, type Game } from "@/lib/data";

const OUR_TEAM = "James McNally";

function getResultBadge(game: Game) {
  if (game.isPlayoff) {
    return <span className="badge-playoff">Playoffs</span>;
  }
  const isOurGame = game.home === OUR_TEAM || game.away === OUR_TEAM;
  if (!isOurGame) return null;
  if (game.result === "upcoming") {
    return <span className="badge-upcoming">Upcoming</span>;
  }
  if (game.result === "W") return <span className="badge-win">Win</span>;
  if (game.result === "L") return <span className="badge-loss">Loss</span>;
  return null;
}

function GameCard({ game }: { game: Game }) {
  const isOurGame = game.home === OUR_TEAM || game.away === OUR_TEAM;
  const isHome = game.home === OUR_TEAM;

  return (
    <div
      className={`game-card rounded-sm p-4 ${isOurGame ? "border-l-[oklch(0.68_0.19_42)]" : "border-l-[oklch(0.28_0.008_265)]"}`}
      style={{ borderLeftColor: isOurGame ? "oklch(0.68 0.19 42)" : "oklch(0.28 0.008 265)" }}
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
            {game.home === OUR_TEAM && (
              <span className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                ← US
              </span>
            )}
          </div>
          <div
            className={`font-bold truncate ${game.home === OUR_TEAM ? "text-[oklch(0.68_0.19_42)]" : "text-white"}`}
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

type FilterType = "all" | "our-team" | "regular" | "playoff";

export default function ScheduleSection() {
  const [filter, setFilter] = useState<FilterType>("all");

  const regularGames = GAMES.filter((g) => !g.isPlayoff);
  const playoffGames = GAMES.filter((g) => g.isPlayoff);
  const ourGames = GAMES.filter(
    (g) => g.home === OUR_TEAM || g.away === OUR_TEAM
  );

  const displayGames =
    filter === "our-team"
      ? ourGames
      : filter === "regular"
      ? regularGames
      : filter === "playoff"
      ? playoffGames
      : GAMES;

  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: "all", label: "All Games", count: GAMES.length },
    { key: "our-team", label: "Our Games", count: ourGames.length },
    { key: "regular", label: "Regular Season", count: regularGames.length },
    { key: "playoff", label: "Playoffs", count: playoffGames.length },
  ];

  return (
    <section id="schedule" className="py-20 bg-[oklch(0.15_0.008_265)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div
            className="text-[oklch(0.68_0.19_42)] text-xs font-bold uppercase tracking-widest mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            2026 Season
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
            Game Schedule
          </h2>
          <div className="mt-3 w-16 h-1 bg-[oklch(0.68_0.19_42)]" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                filter === key
                  ? "bg-[oklch(0.68_0.19_42)] text-[oklch(0.13_0.008_265)]"
                  : "bg-[oklch(0.20_0.008_265)] text-[oklch(0.60_0.01_265)] hover:text-white border border-[oklch(0.28_0.008_265)]"
              }`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
            >
              {label}
              <span className="ml-2 opacity-70">({count})</span>
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[oklch(0.68_0.19_42)]" />
            <span className="text-[oklch(0.55_0.01_265)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Our team (James McNally)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[oklch(0.28_0.008_265)]" />
            <span className="text-[oklch(0.55_0.01_265)] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Other teams
            </span>
          </div>
        </div>

        {/* Games grid */}
        {filter !== "all" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Regular Season */}
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

            {/* Playoffs */}
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
            View Full Schedule on MasterSports →
          </a>
        </div>
      </div>
    </section>
  );
}
