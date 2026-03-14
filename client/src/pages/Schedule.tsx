/*
  Schedule page - Connor Chen's team game schedule
*/
import { MapPin, Clock, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { GAMES, type Game } from "@/lib/data";

const OUR_TEAM = "Connor Chen";

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

export default function Schedule() {
  // Get only Connor Chen's games
  const ourGames = GAMES.filter(
    (g) => g.home === OUR_TEAM || g.away === OUR_TEAM
  );

  // Separate regular season and playoffs
  const regularGames = ourGames.filter((g) => !g.isPlayoff);
  const playoffGames = ourGames.filter((g) => g.isPlayoff);

  return (
    <PageLayout title="Game Schedule" subtitle="Connor Chen's Team">
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
      </div>

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
    </PageLayout>
  );
}
